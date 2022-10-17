import React from 'react'

function Navbar() {
  return (
    <div className='nav' >
        <img className='nav-logo' src="logo.png" alt="" />
        <div className='nav-title' >
            <a className='nav-link' href="/main">Home</a>
            <a className='nav-link' href="/about">About</a>
            <a className='nav-link' href="/find">Find a Job</a>
            <a className='nav-link' href="/blog">Blog</a>
            <a className='nav-link' href="/join">Join us</a>
            <a className='nav-link' href="/contact">Contact</a>
        </div>
        <button className='button' > Sign Up/ Login</button>
    </div>
  )
}

export default Navbar