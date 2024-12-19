import React, { useState } from "react";

function SearchMovies(props) {
    const [movieTitle, setMovieTitle] = useState("");

    const searchMovie = async (e) => {
        e.preventDefault();
        if (!movieTitle.trim()) {
            console.log("Please enter a movie title");
            return;
        }
        const url = `https://www.omdbapi.com/?apikey=8044948d&t=${movieTitle}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            props.addFavourite(data)
            console.log(data);
            
        } catch (err) {
            console.error("Failed to fetch movie data:", err);
        }
    };

    return (
        <div className='search-movies'>
            <form onSubmit={searchMovie}>
                <label htmlFor="query">Movie Title</label>
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    placeholder="Enter a movie title"
                    role="search"
                />
                <button type="submit">Search Movie</button>
            </form>
        </div>
    );
}

export default SearchMovies;