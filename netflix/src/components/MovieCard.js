import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getId, getTrailerMovie, setOpen } from '../redux/movieSlice';

const MovieCard = ({posterPath,key}) => {
  const dispatch=useDispatch();
  const handleOpen =()=>{
    dispatch(getId(key));
    dispatch(setOpen(true));
    dispatch(getTrailerMovie(null));
  }

  return (
    <div onClick={handleOpen} className='w-48 pr-2'><img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" /></div>
  )
}

export default MovieCard