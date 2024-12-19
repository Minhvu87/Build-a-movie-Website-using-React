import { useState } from 'react';
import './App.css';
import './styles.css';
import SeachMovies from './SearchMovies';
import FavouriteList from './FavouriteList';
import MovieModal from './MovieModal';

function App2() {
    const [favourites, setFavourites] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const addFavourite = (movie) => {
        setFavourites([...favourites, movie])
    }

    const removeFavourite = (movie) => {
        setFavourites(favourites.filter(f =>f.imdbID !== movie.imdbID))
    }

    const showModal = (movie) => {
        setSelectedMovie(movie)
        setIsModalOpen(true)
    }

    const closeModal = () =>{
        setSelectedMovie(null)
        setIsModalOpen(false)
    }
    console.log(favourites)
    return ( <div className = "App" >
        <SeachMovies addFavourite = { addFavourite }/> 
        <FavouriteList favourites = { favourites } removeFavourite={removeFavourite}
        showModal={showModal}/>
        {selectedMovie && (
        <MovieModal 
          isModalOpen={isModalOpen} 
          closeModal={closeModal}
          movie={selectedMovie}/>
        )}  
        </div >
    );
}

export default App;