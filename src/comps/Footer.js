import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitterSquare} from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer' >
        <BsLinkedin className='footer-icon-lin' />
        <AiFillFacebook className='footer-icon' />
        <img className='footer-logo' src="logo.png" alt="" />
        <AiFillInstagram className='footer-icon' />
        <FaTwitterSquare className='footer-icon' />
    </div>
  )
}

export default Footer