
import './App.css'
import MovieCard from './Components/MovieCard'


function App() {
  const movieNumber = 2;



  return (
    <>
      {movieNumber === 1 ? (<MovieCard movie={{title: "Inception", release_date: "2010", url: "https://m.media-amazon.com/images/I/51s+4G+PqDL._AC_SY445_.jpg"}} />) 
      : <MovieCard movie={{title: "Adi Rai", release_date: "2005", url: ""}} />}
      
    </>
  )
}


export default App
