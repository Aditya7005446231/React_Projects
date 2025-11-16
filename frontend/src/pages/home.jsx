import MovieCard  from "../Components/MovieCard"
import { useState , useEffect} from "react"
import '../css/Home.css'
import { searchMovies,getPopularMovies } from "../services/api"


function Home(){

    const [searchQuery, setSearchQuery] = useState("") // State to hold the search input
    const [movies, setMovies] = useState([]) // State to hold the list of movies
    const [error, setError] = useState(null) // State to hold any error message
    const [loading, setLoading] = useState(true) // State to indicate loading status

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err){
                console.error("Error fetching popular movies:", err);
                setError("Failed to load popular movies.");
            }
            finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    },[]);

    const handleSearch = async(e) =>{
        e.preventDefault(); // don't refresh the page
        
        if(!searchQuery.trim()) return; // if search query is empty, do nothing
        if(loading) return; // if already loading, do nothing

        setLoading(true)

        try{
            const results = await searchMovies(searchQuery);
            setMovies(results);
            setError(null);

        }catch (err){
            console.error("Error searching movies:", err);
            setError("Failed to search movies.");
        }finally{
            setLoading(false);
        }
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

        {error && <div className="error-message">{error}</div>}

        {(loading ? (
            <div className="loading">Loading...</div>
        ) : (
            <div className="movies-grid">
                {movies.map(movie => 
                    <MovieCard key={movie.id} movie={movie} />
                )
                }
            </div>
        ))}
        <div className="movies-grid">
            {movies.map(movie => 
                <MovieCard key={movie.id} movie={movie} />
            )
            }
        </div>
    </div>
}



export default Home;