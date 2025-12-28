import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';


const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMen] = useState(false)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <div
        onClick={() => navigate('/')}
        className="flex items-center gap-2 cursor-pointer"
      >
        {/* <img
          className="w-44"
          src={''}
          alt="Logo"
        /> */}
        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          GA-Technology
        </span>
      </div>

      <div className='flex  justify-end gap-2'>

        <ul className='hidden md:flex  items-start gap-10 font-medium'>
          <NavLink to='/'
            className={({ isActive }) =>
              `px-4 py-1 rounded-lg transition ${isActive ? "bg-yellow-400 text-white" : "text-gray-800"
              }`
            }>
            <li className='py-1'>HOME</li>
          </NavLink>

          <NavLink to='/about'
            className={({ isActive }) =>
              `px-4 py-1 rounded-lg transition ${isActive ? "bg-yellow-400 text-white" : "text-gray-800"
              }`
            }>
            <li className='py-1'>ABOUT</li>
          </NavLink>

          <NavLink to='/contact'
            className={({ isActive }) =>
              `px-4 py-1 rounded-lg transition ${isActive ? "bg-yellow-400 text-white" : "text-gray-800 hover:bg-yellow-200/20"
              }`
            }>
            <li className='py-1'>PROJECT</li>
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          <img onClick={() => setShowMen(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
          {/* Mobile menu */}
          <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
              <div
                onClick={() => navigate('/')}
                className="flex items-center gap-2 cursor-pointer"
              >
                {/* <img className="w-44"
                   src={''}
                   alt="Logo"
              /> */}
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                  GA-Technology
                </span>
              </div>
              <img className='w-7' onClick={() => setShowMen(false)} src={assets.cross_icon} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <NavLink to='/' onClick={() => setShowMen(false)}> <p className='px-4 py-2 rounded inline-block text-gray-800'>HOME</p></NavLink>
              <NavLink to='/about ' onClick={() => setShowMen(false)}><p className='px-4 py-2 rounded inline-block text-gray-800'>ABOUT</p></NavLink>
              <NavLink to='/contact' onClick={() => setShowMen(false)}><p className='px-4 py-2 rounded inline-block text-gray-800'>PROJECT</p></NavLink>
            </ul>
          </div>
        </div>

      </div>



    </div>
  )
}

export default Navbar
