import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovies } from "./api";

const App=()=> {
  const [popularMovies,setPopularMovies]= useState([]);

  const search= async(q)=>{
    const cariFilm= await searchMovies();
    console.log({query: cariFilm});
  }
  //get film dari api.js untuk di setState ke popilarMovies
  const moviePopular= async (value) => {
    const response = await getMovieList();
    setPopularMovies(response);
  }
  useEffect(()=> {
    
    moviePopular();
  },[])

  const PopularMovies=()=>{
    return popularMovies.map((movie,i)=>{
        return(
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img 
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              className="Movie-img" />
            <div className="Movie-date">release: {movie.release_date}</div>
            <div className="Movie-rating">{movie.vote_average}</div>
          </div>
        )
      })
    }
      console.log(popularMovies);
  return (
    <div className="App">
      <header className="App-header">
       <h1>Film</h1>
       <input 
        type="text" 
        placeholder='Cari Film' 
        className='Movie-search' 
        onChange={(target)=> search(target.value)}
      />
       <div className="Movie-container">
          <PopularMovies/>
       </div>
      </header>
    </div>
  );
}

export default App;
