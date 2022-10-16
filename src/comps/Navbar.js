import React from 'react'

function Navbar() {
  return (
    <div className='nav' >
        <img className='nav-logo' src="logo.png" alt="" />
        <div className='nav-title' >
            <a className='nav-link' href="">Home</a>
            <a className='nav-link' href="">About</a>
            <a className='nav-link' href="">Find a Job</a>
            <a className='nav-link' href="">Blog</a>
            <a className='nav-link' href="">Join us</a>
            <a className='nav-link' href="">Contact</a>
        </div>
        <button className='button' > Sign Up/ Login</button>

    </div>
  )
}

export default Navbar