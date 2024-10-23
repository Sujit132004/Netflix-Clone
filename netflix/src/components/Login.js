import React, { useState } from 'react'
import Header from './Header'
import { API_END_POINT } from '../utils/constant';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';
const Login = () => {
  const [isLogin,setIsLogin]=useState(false);
  const [fullName,setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const isLoading=useSelector(store=>store.user.isLoading);

  const loginHandler=()=>{
    setIsLogin(!isLogin);
  }
  const getInputData=async(e)=>{
    e.preventDefault(); //stops the reloading of the page
    dispatch(setLoading(true));
    const user={fullName,email,password}
    if(isLogin){
      //login krenge
      const user={email,password};
      try{
        const res = await axios.post(`${API_END_POINT}/login`, user, { withCredentials: true });

        console.log(res);
        if(res.data.success){
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      }
      catch(error){
        toast.error(error.response.data.message);
        console.log(error);
      } finally{
        dispatch(setLoading(false));
      }
    }
    else{
      //register karenge
      dispatch(setLoading(true));
      try{
        const res=await axios.post(`${API_END_POINT}/register`,user);
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message);
        }
        setIsLogin(true);

      }
      catch(error){
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally{
        dispatch(setLoading(false));
      }
    }
    
    setFullName("");
    setEmail("");
    setPassword("");
  }
  return (

    <div className='w-full'>
        <Header/>
        <div className='w-full '>
           <img className="" src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="banner"/> 
           <form onSubmit={getInputData} className=" absolute p-12 top-[20%] left-[40%] flex flex-col justify-center items-center bg-black opacity-75 rounded-md">
            <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "SignUp"}</h1>
                <div className='flex flex-col'>
                    {
                      !isLogin && <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder='Fullname' className='outline-none p-2 my-2 rounded-md bg-gray-800 text-white' />
                    }
                    
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='email' className='outline-none p-2 my-2 rounded-md bg-gray-800 text-white' />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' className='outline-none p-2 my-2 rounded-md bg-gray-800 text-white'/>
                    <button className='bg-red-600 mt-6 p-2 text-white rounded-md font-,=medium' >{`${isLoading ? "Loading...":(isLogin ? "Login":"SignUp")}`}</button>
                    <p className='text-white text-center mt-2'>{isLogin? "New to Netflix ?" :" Already have an Account?"} <span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'> {isLogin ? "SignUp" : "Login"}</span> </p>
                </div>
           </form>
        </div>
    </div>
  )
}

export default Login