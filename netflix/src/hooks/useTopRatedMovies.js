import axios from "axios";
import { getTopRatedMovie } from "../redux/movieSlice";
import {  options, Top_Rated_Movie } from "../utils/constant";
import {useDispatch} from "react-redux";
const useTopRatedMovies=async()=>{
    const dispatch=useDispatch();
    try{
      const res=await axios.get(Top_Rated_Movie,options);
      console.log(res);
      dispatch(getTopRatedMovie(res.data.results));
    }
    catch(error){
      console.log(error);
    }
}
export default useTopRatedMovies;