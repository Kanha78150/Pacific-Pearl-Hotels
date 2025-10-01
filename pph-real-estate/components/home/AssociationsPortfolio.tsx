"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "87%", label: "Customer Satisfaction Rate" },
  { value: "56%", label: "Occupancy Rate Achieved" },
  { value: "87%", label: "Revenue Growth Yearly" },
  { value: "77%", label: "Repeat Guest Rate" },
];

const logos: string[] = [
  "/images/logos/HiltonHotelsLogo.png",
  "/images/logos/Marriott-Logo.png",
  "/images/logos/ihg-Logo.png",
  "/images/logos/WHR-Logo.webp",
  "/images/logos/hyatt_logo.png",
  "/images/logos/Choice_logo.png",
  "/images/logos/Accor.png",
  "/images/logos/Oimg1.png",
  "/images/logos/Oimg2.png",
  "/images/logos/Oimg3.png",
  "/images/logos/Oimg4.png",
  "/images/logos/Oimg5.png",
];

const AssociationsPortfolio = () => {
  return (
    <section className="w-full">
      {/* Associations */}
      <div className="bg-white py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-gilda font-normal text-[#000000] mb-10"
        >
          Brand Affiliations
        </motion.h2>

        <div className="relative w-full overflow-hidden py-6 bg-white">
          <motion.div
            className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // higher = slower
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 
                   w-[100px] h-[60px]   /* default for small screens */
                   sm:w-[120px] sm:h-[70px] 
                   md:w-[140px] md:h-[80px] 
                   lg:w-[160px] lg:h-[90px]
                   flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="Association Logo"
                  width={160}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="relative bg-gradient-to-b from-[#001229] to-[#000000] text-white py-20 px-6 overflow-hidden">
        {/* Background SVG */}
        <Image
          src="/images/Circle.svg"
          alt="Background Decoration"
          width={600}
          height={600}
          className="absolute top-0 left-0 opacity-20 pointer-events-none select-none"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-4xl font-normal mb-4 font-gilda text-[#FFFFFF]"
          >
            Our Impressive Portfolio of Hospitality Assets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg text-[#DCDCDC] mb-8 font-general font-normal"
          >
            With over 130 hotels in our portfolio, we are proud to deliver
            exceptional experiences across diverse markets. Our commitment to
            quality and innovation sets us apart in the hospitality industry.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="px-6 py-3 border border-[#BDA078] text-[#BDA078] hover:bg-[#BDA078] hover:text-white transition text-base font-medium font-general"
          >
            Learn More
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mt-16 text-left relative z-10 font-gilda">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-gilda font-normal">{stat.value}</p>
              <p className="text-sm text-[#B3B3B3] mt-2 font-general font-normal">
                {stat.label}
              </p>
              <div className="w-62 h-[1px] bg-[#7B5014] mx-auto mt-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociationsPortfolio;
