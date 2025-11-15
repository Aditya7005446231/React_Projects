import MovieCard  from "../Components/MovieCard"
import { useState } from "react"


function Home(){

    const [searchQuery, setSearchQuery] = useState("") // State to hold the search input

    const movies = [
        {id:1, title:"One upon a time in hollywood", release_date:"2019"},
        {id:2, title:"Inception", release_date:"2010"},
        {id:3, title:"Interstellar", release_date:"2014"},
    ]

    const handleSearch = (e) =>{
        e.preventDefault(); // don't refresh the page
        alert("Faahhhh")
        setSearchQuery("----------") // just to demonstrate that we can set the state
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => 
                <MovieCard key={movie.id} movie={movie} />
            )
            }
        </div>
    </div>
}



export default Home;