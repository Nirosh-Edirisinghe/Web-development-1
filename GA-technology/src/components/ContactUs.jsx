import React from 'react'
import { assets } from '../assets/assets'

const ContactUs = () => {
  return (
    <div>
      <div className="text-center text-2xl sm:text-3xl font-bold  pt-10 text-gray-500">
        <p>CONTACT <span className='text-gray-800 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col  justify-center md:flex-row gap-16 mb-28 text-sm'>
        <img className='w-full md:max-w-100 rounded-md' src={assets.contact_us} alt="" />
        <div className='flex  flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-700'>No 99, Wawpitiya road, <br />New malkaduwawa</p>
          <p className='text-gray-700'>+94 740 404 064 <br /> Email: service@gatechnology.lk</p>
          <p className='font-semibold text-lg text-gray-600'>Projects at GA Technology</p>
          <p className='text-gray-700'>Learn more about our teams and innovative telecommunication project.</p>

          <button className='border border-gray-800 rounded-lg px-8 py-4 text-sm font-semibold hover:bg-yellow-400 hover:text-white hover:border-yellow-400  transition-all duration-500'>View Projects</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
