
import { useState } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

const App = ()=> {
const [movies, setMovies] = useState([
  {
    "Title": "Erik the Viking",
    "Year": "1989",
    "imdbID": "tt0097289",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDRjMWU2ZTYtNGM3NS00NmM5LWE5OWMtZDMwMWJhYTY5NGUxXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
},
{
    "Title": "Northmen - A Viking Saga",
    "Year": "2014",
    "imdbID": "tt2290553",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI0ZjljMzMtNDFlZi00YTM1LTgxY2EtN2Q1ZjNiZTNkMzQ3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
    "Title": "Viking",
    "Year": "2016",
    "imdbID": "tt5157456",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzI0NDU3MDAtOTE5Ni00ODM3LWFlYTgtY2ExZGYyMmU3M2E1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
}
])

  return (
    <div className="App">
<>
<MoviesList  movies ={movies}/>

</>

    </div>
  )
}

export default App
