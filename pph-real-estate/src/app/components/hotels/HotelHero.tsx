"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HotelHero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aboutbg.jpg"
          alt="About Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/54" /> {/* overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-normal uppercase md:text-6xl font-gilda mb-4"
        >
          Hotels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-7xl text-[#F1F1F1] leading-relaxed lg:text-xl font-normal font-general md:text-base text-center sm:text-base"
        >
          Explore the diverse range of properties under our expert
          management—each one offering exceptional service, unique charm, and
          unforgettable guest experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default HotelHero;
