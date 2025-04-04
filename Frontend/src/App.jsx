import  React, { useEffect } from 'react'
import  {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingsPage';
import { useAuthStore } from './store/useAuthStore';

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
    <div>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/settings" element={<SettingPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>

      </Routes>
     


    </div>
  )
}

export default App