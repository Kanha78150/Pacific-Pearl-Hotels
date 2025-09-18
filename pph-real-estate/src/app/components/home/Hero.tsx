"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilda mb-4 sm:mb-6 leading-snug"
        >
          Leading Innovators In Hospitality <br className="hidden md:block" />
          And Resort Management
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl md:max-w-3xl text-gray-200 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 px-2"
        >
          We Offer A Resilient Hospitality Strategy Designed To Optimize Cash
          Flow And Foster Capital Growth. Partner With Us To Elevate Your
          Hospitality Experience And Achieve Exceptional Results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 text-sm sm:text-base">
            See Case Studies
          </button>
          <button className="bg-[#001931] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 text-sm sm:text-base">
            Partner with Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
