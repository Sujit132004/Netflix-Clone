import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTrailerMovie } from '../redux/movieSlice';
import { options } from '../utils/constant';

const useMovieById = (movieId) => {
  console.log(movieId);
  const dispatch = useDispatch();
  const trailerMovie = useSelector(store => store.movie.trailerMovie); // Access trailerMovie state

  useEffect(() => {
    const getMovieById = async () => {
      if (!movieId) return;
      
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        const trailer = res.data.results.filter((item) => item.type === "Trailer");
        
        // Get the first trailer or null
        const trailerToDispatch = trailer.length > 0 ? trailer[0] : null;

        // Only dispatch if the trailer is different
        if (!trailerMovie || (trailerToDispatch && trailerToDispatch.key !== trailerMovie.key)) {
          dispatch(getTrailerMovie(trailerToDispatch));
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    getMovieById();
  }, [movieId, dispatch, trailerMovie]);
};

export default useMovieById;
