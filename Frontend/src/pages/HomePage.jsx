import React from 'react'
import { useChatStore } from '../store/useChatStore'
import { Sidebar } from 'lucide-react';
import ChatContainer from '../components/ChatContainer';
import NoChatSelected from '../components/NoChatSelected';

const HomePage = () => {
  const {selectedUser} = useChatStore(); 

  return (
    <div className='h-screen bg-base-200'>
      <div className='flex items-center justify-center pt-20 px-4'>
        <div className='bg-base-100 rounded-lg overflow-hidden '>
           <Sidebar/>
            {!selectedUser ? <NoChatSelected/> : <ChatContainer/>}
        </div>
      </div>
    </div>
  )
}

export default HomePage