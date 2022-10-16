import React from 'react'

function Main1() {
  return (
    <div className='main' >
        <div className='main-box2' >
          <h1 className='main-text ' >Find your dream job quickly and easily</h1>
          <p className='main-text ' >
            Let us connect you to the best opportunities 
          </p>
          <div className='main-search' >
          <input type="text" className='input-skill' placeholder="Enter your dream job"/>
          <select>
            <option value="Ford">Singapore</option>
            <option value="Volvo" selected>Hong Kong</option>
            <option value="Fiat">Malaysia</option>
            <option value="Fiat">Taiwan</option>
            <option value="Fiat">China</option>
          </select>
          <button className='button' >Search</button>
          </div>
          <div className='main-brag' >
            <div className='main-brag-single' >            
                <h1 className='main-brag-text1 ' >10k+</h1>
                <h1 className='main-brag-text2' >Job openings</h1>
            </div>
            <div className='main-brag-single' >            
                <h1 className='main-brag-text1 ' >500+</h1>
                <h1 className='main-brag-text2' >Startups</h1>
            </div>
            <div className='main-brag-single' >            
                <h1 className='main-brag-text1 ' >30k+</h1>
                <h1 className='main-brag-text2' >Jobs found</h1>
            </div>
          </div>
        </div>
        <div className='main-box2' >
            <img className='main-man' src="man.jpg" alt="" />
        </div>
    </div>
  )
}

export default Main1