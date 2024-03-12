import React from 'react'

function App  (){
  return (
    <>
    
      <div className=' flex mx-auto justify-around mt-4'>
        <div className='h-16 w-16'>
           <img src="logo.png" alt="" /> 
        </div>
        <div className=''>
          <ul className='flex  gap-7'>
          <li>Home</li>
          <li>services</li>
          <li>About us</li>
          <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
