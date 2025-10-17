import React from 'react'
import{FaSearch} from 'react-icons/fa'
import{Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/"> 
            <h1 className='font-bold text-shadow-amber-800 flex flex-wrap'> 
                <span className='text-slate-500'>Basagoud</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='search...' className='bg-transparent' />
                <FaSearch className='text-slate-600'/>
            </form>
            
            <ul className='flex gap-4'>
                <Link to="About"> 
                <li className='hover:underline'>About</li>
                </Link>
                <Link to="/"> 
                <li className='hover:underline'> Home </li>
                </Link>
                <Link to="Signin"> 
                <li className='hover:underline'>Signin</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
