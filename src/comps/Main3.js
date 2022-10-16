import React from 'react'
import { AiFillBank } from "react-icons/ai";
import { GoLaw } from "react-icons/go";




function Main3() {
  return (
    <div className='main-3' >
        <h1 className='main-3-title ' >Job categories</h1>
        <div className='main-3-container' >
          <div className='main-3-single' >
            <AiFillBank  className='main-3-icons' />
            <h1 className='main-3-text' >Banking</h1>
            <h1 className='main-3-open ' >(5 open positions)</h1>
          </div>
          <div className='main-3-single'>
            <GoLaw className='main-3-icons'  />
            <h1 className='main-3-text' >Legal</h1>          
            <h1 className='main-3-open ' >(5 open positions)</h1> 
          </div>
          <div className='main-3-single'>
            <GoLaw className='main-3-icons'  />
            <h1 className='main-3-text' >Legal</h1>          
            <h1 className=' main-3-open ' >(5 open positions)</h1> 
          </div>
        </div>
        <div className='main-3-empty' >

        </div>
        <div className='main-3-container' >
        <div className='main-3-single' >
            <AiFillBank  className='main-3-icons' />
            <h1 className='main-3-text' >Banking</h1>
            <h1 className='main-3-open ' >(5 open positions)</h1>
          </div>
          <div className='main-3-single'>
            <GoLaw className='main-3-icons'  />
            <h1 className='main-3-text' >Legal</h1>          
            <h1 className='main-3-open ' >(5 open positions)</h1> 
          </div>
          <div className='main-3-single'>
            <GoLaw className='main-3-icons'  />
            <h1 className='main-3-text' >Legal</h1>          
            <h1 className=' main-3-open ' >(5 open positions)</h1> 
          </div>
        </div>
    </div>
  )
}

export default Main3

