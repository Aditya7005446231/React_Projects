import MovieCard  from "../Components/MovieCard"
import { useState , useEffect} from "react"
import '../css/Home.css'
import { searchMovies,getPopularMovies } from "../services/api"


function Home(){

    const [searchQuery, setSearchQuery] = useState("") // State to hold the search input
    const [movies, setMovies] = useState([]) // State to hold the list of movies

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err){}
            finally{}
        }
    },[]);

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