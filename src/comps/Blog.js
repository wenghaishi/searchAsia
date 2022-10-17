import React from 'react'

function Blog() {
  return (
    <div className='blog-main' >
        <div className='blog-employee' >
            <h1 className='blog-title ' >For the job seeker</h1>
            <div className='blog-line' >
                <img  className='blog-img1' src="man.png" alt="" />
                <div className='blog-cross' >
                    <h1 className='blog-text' >4 tricks for your resume to stand out</h1>
                    <button className='button' >Read more</button>
                </div>
            </div>
            <div className='blog-line' >
                <img  className='blog-img1' src="employee2.png" alt="" />
                <div className='blog-cross' >
                    <h1 className='blog-text' >4 tricks for your resume to stand out</h1>
                    <button className='button' >Read more</button>
                </div>
            </div>
            <div className='blog-line' >
                <img  className='blog-img1' src="employee3.webp" alt="" />
                <div className='blog-cross' >
                    <h1 className='blog-text' >4 tricks for your resume to stand out</h1>
                    <button className='button' >Read more</button>
                </div>
            </div>
        </div>
        <div className='blog-employer' >
            <h1 className='blog-title2' >For the employer</h1>
            <div className='blog-line' >
                <img  className='blog-img1' src="employer.png" alt="" />
                <div className='blog-cross' >
                    <h1 className='blog-text2' >Traits to look out for before hiring</h1>
                    <button className='button1' >Read more</button>
                </div>
            </div>
            <div className='blog-line' >
                <img  className='blog-img1' src="employer2.jpg" alt="" />
                <div className='blog-cross' >
                    <h1 className='blog-text2' >Things to look out for in a resume</h1>
                    <button className='button1' >Read more</button>
                </div>
            </div>
            <div className='blog-line' >
                <img  className='blog-img1' src="employer3.jpg" alt="" />
                <div className='blog-cross' >
                    <h1 className='blog-text2' >Foster strong team spirit in 3 steps</h1>
                    <button className='button1' >Read more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog