import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'
// a4666da5

const API_URL = 'http://www.omdbapi.com?apikey=a4666da5'

const movie1 = {
    
        "Title": "Superman III",
        "Year": "1983",
        "imdbID": "tt0086393",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"

}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Superman')
    }, []);

    return (
        <div className="app">
            <h1>Movie Catalog</h1>
            <div className="search">
                <input 
                    placeholder="Procure por filmes"
                    value="Superman"
                    onChange ={ () => {}}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => {}}
                />
            </div>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;