import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className=" mt-6">
      <div
        className="relative rounded-xl overflow-hidden h-[320px] sm:h-[350px] md:h-[450px]"
        style={{
          backgroundImage: `url(${assets.bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm sm:text-base md:text-xl text-yellow-400 font-semibold">
            Welcome to
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            GA Technology
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 mt-3 max-w-xl">
            Your trusted leader in comprehensive telecommunication support services for unmatched quality and reliability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
