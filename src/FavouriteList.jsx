import FavouriteMovie from "./FavouriteMovie";

function FavouriteList(props) {
    return (
        <div className="favourites-container">
            <h3>My Favourite Movies</h3>
            {props.favourites.length > 0 ? (
                
            <ul className='favourites-list'>
                {props.favourites.map(movie => (
                    <FavouriteMovie movie={movie} 
                    removeFavourite={props.removeFavourite} 
                    showModal={props.showModal}/>
                ))}
            </ul>
            ) :(
                <p>You have no Favourite movie yet.</p>
               )
            }
        </div>
    );
}

export default FavouriteList;
