import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector,useDispatch} from "react-redux"
import { API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';
const Header = () => {
    const user=useSelector((store)=>store.user.user);
    const toggle=useSelector(store=>store.movie.toggle);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    console.log(user);
    const logoutHandler=async()=>{
        try{
            const res=await axios.get(`${API_END_POINT}/logout`);
            if(res.data.success){
                toast.success(res.data.message);
            }
            console.log(res);
            dispatch(setUser(null));
            navigate("/");
        }
        catch(error){
            console.log(error);
        }
    }
    const toggleHandler=()=>{
        dispatch(setToggle());
    }
    return (
        <div className='flex w-[100%]  absolute z-10 items-center justify-between px-6  bg-gradient-to-b from-black'>
            <img className='w-56 mt-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            {
                user && (
                    <div className='flex items-center'>
                <IoIosArrowDropdown className='' color='white' size="24px"/>
                <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
                <div className='ml-4'>
                    <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2 rounded-md'>Logout</button>
                    <button onClick={toggleHandler} className='bg-red-800 text-white px-4 rounded-md py-2 ml-2 cursor-pointer' style={{ cursor: 'pointer' }}>{toggle ? "Home" : "Search Movie" }</button>
                </div>
                </div>
                )
            }
            
        </div>
    )
}

export default Header