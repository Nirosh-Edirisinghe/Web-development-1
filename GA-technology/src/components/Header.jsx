import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" mt-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
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
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-yellow-400 font-semibold">
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            GA Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs sm:text-sm md:text-base text-gray-200 mt-3 max-w-xl">
            Your trusted leader in comprehensive telecommunication support services for unmatched quality and reliability.
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
