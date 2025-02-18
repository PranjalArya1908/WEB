import React from 'react'
import GallerySection from '../GallerySection'
import Announcements from '../AnnouncementsSection'

const Third = () => {
  return (
    <div
    className='h-screen bg-orange-100 flex flex-col gap-2'>
        <Announcements/>
        <h1
        className='text-5xl'>Gallery</h1>
        <hr />
        <GallerySection/>
    </div>
  )
}

export default Third