import React, { useState } from 'react'

const Nav = () => {
    let [state ,changestate]=useState(false);
  return (
    <>
    <div className="menu flex justify-center md:justify-evenly bg-gray-400 p-3 font-bold flex-col md:flex-row text-center">
        <h1>Hamza</h1>
    <ul className='flex gap-3 flex-col md:flex-row bg-yellow-300 hidden md:flex'>
        <li className='bg-pink-300'>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
    </div>
    </>
  )
}

export default Nav