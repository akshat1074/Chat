import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast,{Toaster} from "react-hot-toast";

export const useAuthStore = create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    onlineUsers:[],
    socket:null,

    checkAuth:async()=>{
        try { 
          const res= await axiosInstance.get("/auth/check");

          set({authUser:res.data})
            
        } catch (error) {
            console.log("Error in checkAuth:",error)
            set({authUser:null});
        } finally{
            set({isCheckingAuth:false});
        }
    },

    signup:async(data)=>{
        setInterval({isSigningUp:true});
        try{
            const res = await axiosInstance.post("/auth/signup",data);
            set({authUser:res.data})
        }catch{
            toast.error(error.response.data.message);
        } finally{
            set({isSigningUp:false})
        }
    },

    login:async(data)=>{
        set({isLoggingIn:true});
        console.log("Login data being sent:", data);
        try{
            const res = await axiosInstance.post("/auth/login",data);
            set({authUser:res.data});
            toast.success("Logged in successfully");

        
        }catch(error){
            toast.error("Login failed");
            console.error("Error response:", error.response?.data);
             
            
        }finally{
            set({isLoggingIn:false});
        }

    },

     logout:async()=>{
        try{
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out successully");
            
        
        }catch(error){
            toast.error(error.response.data.message);
        }
     },




    updateProfile:async(data)=>{
        try{
            await axiosInstance.post("/auth/update-profile",data);
            set({authUser:res.data});
            toast.success("Profile updated successfully")
        } catch(error){
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        } finally{
            set({isUpdatingProfile:false});
        }
    },
      


}));