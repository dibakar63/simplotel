import React from 'react'
import img1 from '../assets/img1.jpg'
const Home = () => {
  return (
    <div className='home'>
    
      <div className='homepage'>

        <img src={img1} className='image'/>
        <div className='box'>
            <h1 className='title'>LOREM IPSUM</h1>
            <p className='para'>Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type
specimen book.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
