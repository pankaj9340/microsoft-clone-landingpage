import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <nav className='p-5  space-x-2 flex justify-between text-white text-md font-semibold tracking-wide'>
        <div className='uppercase cursor-pointer ml-10 sm:ml-20'>Home</div>
        <ul className=' hidden sm:flex flex-wrap justify-center space-x-6 uppercase'>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Catalouge</li>
          <li className='cursor-pointer'>Login</li>
        </ul>
        <div className='uppercase cursor-pointer mr-20'>Contact</div>
      </nav>
    </div>
  )
}
