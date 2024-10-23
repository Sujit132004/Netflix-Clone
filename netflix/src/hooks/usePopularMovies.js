import axios from 'axios'
import { options, Popular_Movie } from '../utils/constant';
import { getPopularMovie } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const usePopularMovies =async() => {
  try{
    const dispatch=useDispatch();
    const res=await axios.get(Popular_Movie,options);
    dispatch(getPopularMovie(res.data.results));
  }
  catch(error){

  }
}

export default usePopularMovies