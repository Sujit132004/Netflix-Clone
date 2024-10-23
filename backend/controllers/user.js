import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:true,
            });
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"invalid email id or password",
                success:false,
            })
        }
        const isMatch=await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid email id or password",
                success:false,
            })
        }
        //now if password mtches generate a token 
        const tokenData={
            id:user._id
        }
        const token=await jwt.sign(tokenData,"abcdefghi",{expiresIn:"1d"});
        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            success:true,
            user,
            message:`Welcome Back ${user.fullName}`,
        });

    }catch(error){
        console.log(error);
    }
}
export const Logout=async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()), httpOnly:true}).json({
            message:"User Logged Out Successfully",
            success:true,
        });
        
    }
    catch(error){
        console.log(error);
    }
}
export const Register=async(req,res)=>{
    try{
        const {fullName,email,password}=req.body;
        if(!fullName ||!email || !password){   //data validation 
            return res.status(401).json({
                success:false,
                message:"Invalid data",
            });
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"Email already in use , Please try different one",
                success:false,
            })
        }
        const hashedPassword=await bcryptjs.hash(password,16);
        await User.create({
            fullName,
            email,
            password:hashedPassword,
        });
        return res.status(200).json({
            message:"Account created successfully",
            success:true,
        });
    }
    catch(error){
        console.log(error);

    }
}