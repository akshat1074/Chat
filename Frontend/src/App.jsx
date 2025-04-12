import  React, { useEffect } from 'react'
import  {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingsPage';
import { useAuthStore } from './store/useAuthStore';
import { Loader } from 'lucide-react';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';

const App = () => {
    
    const {authUser,checkAuth,isCheckingAuth}=useAuthStore();
    


    useEffect(()=>{
      checkAuth();
    },[checkAuth]);

    console.log({authUser});
    
    if(isCheckingAuth && !authUser) return(
      <div>
        <Loader className="size-10 animate-spin"/>
      </div>
    )
    
  return (
    <div >
      <Navbar/>
     
      <Routes>
      <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

      </Routes>
     


    </div>
  )
}

export default App