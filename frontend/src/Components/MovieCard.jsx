import '../css/MovieCard.css'

function MovieCard({movie}){

    function handleFavoriteClick(){
        alert("Clicked")
    }

    const posterUrl = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/300x450?text=No+Image';
    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie?.title || 'Movie poster'} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={handleFavoriteClick}>
                        ❤
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie?.title}</h3>
                <p>{movie?.release_date}</p>                    
            </div>
        </div>
    )
}

export default MovieCard;