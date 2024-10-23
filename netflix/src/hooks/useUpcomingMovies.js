import axios from "axios";
import { getUpcomingMovie } from "../redux/movieSlice";
import {  options,  Upcoming_Movie } from "../utils/constant";
import {useDispatch} from "react-redux";
const useUpcomingMovies=async()=>{
    const dispatch=useDispatch();
    try{
      const res=await axios.get(Upcoming_Movie,options);
      console.log(res);
      dispatch(getUpcomingMovie(res.data.results));
    }
    catch(error){
      console.log(error);
    }
}
export default useUpcomingMovies;