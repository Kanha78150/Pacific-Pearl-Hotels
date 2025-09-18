"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    image: "/images/standout/slide1.jpg",
    title: "People-Powered Excellence",
  },
  {
    image: "/images/standout/slide2.jpg",
    title: "Innovative Designs That Inspire and Engage",
  },
  {
    image: "/images/standout/slide3.jpg",
    title: "Heartfelt Service That Makes a Difference",
  },
  {
    image: "/images/standout/slide4.jpg",
    title: "Heartfelt Service That Makes a Difference",
  },
];

const WhyWeStandOut = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400; // adjust slide width
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-3 md:px-9 lg:px-1 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Why We Stand Out in Hospitality
        </h2>
        <p className="text-gray-600 mb-6">
          Our commitment to proven performance ensures consistent success across
          our properties. We leverage data-driven strategies to maximize returns
          and enhance guest satisfaction.
        </p>
        <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
          Join Us
        </button>
      </motion.div>

      {/* Slider Section */}
      <div className="relative max-w-full mx-auto p-0">
        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden overflow-y-hidden no-scrollbar scroll-smooth"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative min-w-[300px] md:min-w-[300px] lg:min-w-[300px] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <p className="text-white p-4 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls at Bottom-Right */}
        <div className="absolute -bottom-12 right-0 flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;
