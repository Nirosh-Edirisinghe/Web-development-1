import React from 'react'
import { motion } from "framer-motion";

import dialog from "../assets/dialog.png";
import cenrf from "../assets/cenrf.png";
import comba from "../assets/comba.png";
import huawei from "../assets/huawei.png";


const partners = [
  { name: "Dialog", img: dialog },
  { name: "CenRF", img: cenrf },
  { name: "Comba", img: comba },
  { name: "Huawei", img: huawei },
];

const Partners = () => {
  return (
    // <section className="px-4 sm:px-8 py-16 bg-white">
    //   <div className="max-w-7xl mx-auto text-center">
    //     {/* Section Title */}
    //     <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
    //       Cooperating Partners
    //     </h2>
    //     <p className="text-gray-600 text-sm sm:text-base mt-2">
    //       Sincerely look forward to your cooperation
    //     </p>

    //     {/* Partners */}
    //     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">
    //       {partners.map((partner, index) => (
    //         <div key={index} className="flex flex-col items-center">
    //           {/* Logo box */}
    //           <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center w-full h-24">
    //             <img
    //               src={partner.img}
    //               alt={partner.name}
    //               className="max-h-12 object-contain"
    //             />
    //           </div>

    //           {/* Name */}
    //           <p className="mt-3 text-sm font-medium text-gray-700">
    //             {partner.name}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="px-4 sm:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Cooperating Partners
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mt-2">
          Sincerely look forward to your cooperation
        </p>

        {/* ONE Gray Container */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 40,
            damping: 15
          }}
          className="mt-10 bg-gray-200 shadow-md rounded-xl py-10 px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center hover:-translate-y-4 transition-all duration-400">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="h-12 object-contain"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Partners
