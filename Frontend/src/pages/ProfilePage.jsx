import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Camera } from 'lucide-react';

const ProfilePage = () => {
  const {authUser,isUpdatingProfile,updateProfile} = useAuthStore();
  const [selectedImg,setSelectedImg] = useState(null);

  

  return (
    <div className='h-screen pt-20'>
      <div className='max-w-2xl mx-auto p-4 py-8 '>
        <div className='bg-base-300 rounded-xl p-6 space-y-8'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Profile</h1>
            <p classmtName='mt-2'>Your Profile information </p>
          </div>

        <div className='flex flex-col items-center gap-4 '>
          <div className='relative'>
            <img 
              src=''
              alt='Profile'
              className='size-32 rounded-full object-cover border-4'
              />
              <label 
                     htmlFor="avatar-upload"
                     className={`
                       absolute bottom-0 right-0 
                       bg-base-content hover:scale-105
                       p-2 rounded-full cursor-pointer 
                       transition-all duration-200
                       ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                     `}>
                      <Camera className='w-5 h-5 text-base-200'/>
                      <input
                        type="file"
                        id="avatar-upload"
                        className='hidden'
                        accept='image/*'
                        disabled={isUpdatingProfile}/>
              </label>
            
          </div>
          <p className='text-sm text-zinc-400'> 

          </p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default ProfilePage