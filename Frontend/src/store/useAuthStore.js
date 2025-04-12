import {create} from "zustand"
import { axiosInstance } from "../lib/axios";

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
            
        }
    }
      


}));