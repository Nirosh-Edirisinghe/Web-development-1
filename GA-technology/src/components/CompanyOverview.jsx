import React from 'react'
import { assets } from '../assets/assets'

const CompanyOverview = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl text-gray-800 font-semibold text-center">
          Who We Are
        </h2>

        <p className="text-center text-gray-700 mt-2 mb-10 text-sm sm:text-base ">
          Learn more about who we are, what we believe in, and how we deliver value through technology.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-800 hover:scale-105">
            {/* Image */}
            <img
              src={assets.about_img}
              alt="About Us"
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="relative p-6 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-yellow-200
                    translate-y-full group-hover:translate-y-0 
                    transition-transform duration-500 ease-in-out z-0" />

              {/* Text */}
              <div className="relative z-10 text-center transition-colors duration-500 ">
                <h3 className="text-xl font-semibold mb-3">
                  About Us
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  GA Technology is a leading provider of telecommunications support services, helping businesses maintain reliable and efficient communication systems.  
                </p>
              </div>
            </div>
          </div>


          {/* Card 2 */}          
          <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-106">
            {/* Image */}
            <img
              src={assets.vision_img}
              alt="About Us"
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="relative p-6 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-yellow-200 
                    translate-y-full group-hover:translate-y-0 
                    transition-transform duration-500 ease-in-out z-0" />

              {/* Text */}
              <div className="relative z-10 text-center transition-colors duration-500 ">
                <h3 className="text-xl font-semibold mb-3">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  Our vision at GA Technology is to be a leading provider of cutting -edge telecommunications solutions that enable businesses to thrive in an increasingly connected world.
                </p>
              </div>
            </div>
          </div>


          {/* Card 3 */}
           <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            {/* Image */}
            <img
              src={assets.mision_img}
              alt="About Us"
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="relative p-6 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-yellow-200 
                    translate-y-full group-hover:translate-y-0 
                    transition-transform duration-500 ease-in-out z-0" />

              {/* Text */}
              <div className="relative z-10 text-center transition-colors duration-500 ">
                <h3 className="text-xl font-semibold mb-3">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  At GA Technology , our mission is to provide exceptional telecommunications support services that empower our clients to stay connected and productive.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
