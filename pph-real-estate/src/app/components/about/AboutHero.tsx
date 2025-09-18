"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
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
        <div className="absolute inset-0 bg-black/50" /> {/* overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-gilda mb-4"
        >
          ABOUT US
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl text-gray-200 leading-relaxed text-sm md:text-base"
        >
          Based in San Diego, California, Pacific Pearl Hotels (PPH) is one of
          the nation's leading independent hotel companies. With a portfolio of
          23 properties totaling over 6,500 rooms, PPH operates across the
          United States and employs more than 3,200 hospitality professionals.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
