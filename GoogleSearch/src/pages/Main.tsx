import React from 'react'

const Main = () => {
  return (
    
    <div className='overflow-y-hidden max-h-screen relative'>

      <div>
        <video muted loop autoPlay>
          <source className='h-screen' src='./src/assets/video.mp4' />
        </video>
      </div>

      <div className="text-white absolute bottom-0 z-50 flex justify-center w-full h-full">
         <h1>hellow elcome to search ++</h1>
      </div>
    </div>
  )
}

export default Main


