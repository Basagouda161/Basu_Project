import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
   const {currentUser}=useSelector(state=>state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form className='flex flex-col gap-4' action="" >
        <img src={currentUser.avatar} alt="profile" className='bg-black rounded-full h-24  w-24 object-cover self-center mt-2 cursor-pointer' />
        <input type="text" placeholder='username'id='username' className='border p-3 rounded-lg'/>
        <input type="text" placeholder='email'id='email' className='border p-3 rounded-lg'/>
        <input type="password" placeholder='password'id='password' className='border p-3 rounded-lg'/>
        <button className='border p-3 rounded-lg bg-slate-700 uppercase hover:opacity-70 disabled:opacity-50 text-white'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-500 cursor-pointer'>Delete Account</span>
        <span className='text-red-500 cursor-pointer'>Signout</span>
      </div>
        
    </div>
  )
}
