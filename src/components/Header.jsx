import React from 'react'

const Header = () => {
  return (
    <>
    <div id='upper-header'  className="flex flex-row header bg-slate-100 w-100vh text-2xl text-center p-4 justify-center items-center gap-7 top-0 z-10 text-black">
      <img src='https://upload.wikimedia.org/wikipedia/en/d/db/Uttarakhand_Technical_University_logo.png' alt="Uttarakhand Technical University Logo" className='h-25' />

    
      <div
      className='flex  flex-col gap-3 font-semibold '>
      <h1>VEER MADHO SINGH BHANDARI</h1>
      <h1>UTTARAKHAND TECHNICAL UNIVERSITY</h1>
      </div>

      </div>
      <div
      className='flex justify-between bg-transparent'>
        <div className='flex flex-rows justify-end px-5 py-5 gap-4 align-center'>
        <img src='https://upload.wikimedia.org/wikipedia/en/d/db/Uttarakhand_Technical_University_logo.png' alt="Uttarakhand Technical University Logo" className='h-10' />

        <h1 className='text-2xl font-semibold'>Faculty of Technology</h1>
        </div>
        <div
        className='flex flex-row gap-5 px-5 py-5 font-semibold'>
      <a href="#" className="text-blue-600">Home</a>
          <a href="#" className="text-blue-600">About Us</a>
          <a href="#" className="text-blue-600">Gallery</a>
          <a href="#" className="text-blue-600">Announcements</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-1 rounded h-10">Register Now</a>
          </div>
      </div>
      </>
    )
}

export default Header
