import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/tmdb';
import SearchBar from './SearchBar';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async (searchQuery = '') => {
        setLoading(true);
        const endpoint = searchQuery
            ? `/search/movie?query=${searchQuery}`
            : '/movie/popular';

        try {
            const response = await axiosInstance.get(endpoint);
            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="movies-list">
            <SearchBar onSearch={fetchMovies} />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="movies-container">
                    {movies.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-poster"
                            />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoviesList;
