import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const MovieContainer = (props) => {
    const movie =useSelector(store=>store.movie);
  return (
    <div className='bg-black '>
        <div className='-mt-56 relative z-10'>
                 <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
                 <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
                 <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
                 <MovieList title={"Upcoming Movies"} movies={movie.upComingMovies}/>
       </div>
        
    </div>
  )
}

export default MovieContainer