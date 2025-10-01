"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  ConciergeBell,
  Bed,
  Ruler,
  Hotel,
  Brain,
} from "lucide-react";

const features = [
  {
    image: "/images/standout/slide1.jpg",
    icon: Users,
    title: "People-Powered Excellence",
    description:
      "Delivering unforgettable guest experiences through passionate and dedicated teams",
  },
  {
    image: "/images/standout/slide3.jpg",
    icon: ConciergeBell,
    title: "Heartfelt service that makes a difference",
    description:
      "We believe in hospitality that connects with guests on a personal level.",
  },
  {
    image: "/images/standout/Owner Mindset.avif",
    icon: Brain,
    title: "Owner operator mindset",
    description:
      "We focus on exceptional experiences that leave lasting impressions.",
  },
  {
    image: "/images/standout/slide2.jpg",
    icon: Ruler,
    title: "Long standing brand relationships",
    description:
      "Our design-driven approach creates memorable experiences that resonate.",
  },
  {
    image: "/images/standout/Independent.avif",
    icon: Hotel,
    title: "Independent Hotel Expertise",
    description:
      "Our design-driven approach creates memorable experiences that resonate.",
  },
  {
    image: "/images/standout/slide4.jpg",
    icon: Ruler,
    title: "Innovative Designs That Inspire and Engage",
    description:
      "Our design-driven approach creates memorable experiences that resonate.",
  },
];

const WhyWeStandOut = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -slideWidth : slideWidth,
        behavior: "smooth",
      });
    }
  };
  const email = "ariana@pacificpearlhotels.com";
  const subject = "Joining Inquiry";
  const body = `Hello,
I am interested in joining.
Please provide more details.`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  return (
    <section className="py-16 px-3 md:px-9 lg:px-1 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-5xl mx-auto mb-12"
      >
        <h2 className="text-5xl md:text-4xl font-serif mb-4 font-gilda text-[#000000]">
          Why We Stand Out in Hospitality
        </h2>
        <p className="text-[#191919] font-general font-normal text-lg mb-6">
          Our commitment to proven performance ensures consistent success across
          our properties. We leverage data-driven strategies to maximize returns
          and enhance guest satisfaction.
        </p>
        {/* Smart Join Us Button */}
        {isMobile ? (
          <Link
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#010407] px-6 py-2 hover:bg-black hover:text-white transition font-general font-medium"
          >
            Join Us
          </Link>
        ) : (
          <Link
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#010407] px-6 py-2 hover:bg-black hover:text-white transition font-general font-medium"
          >
            Join Us
          </Link>
        )}
      </motion.div>

      {/* Slider Section */}
      <div className="relative max-w-full mx-auto p-0">
        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden overflow-y-hidden no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative snap-center min-w-full sm:min-w-[300px] lg:min-w-[300px] overflow-hidden group"
            >
              {/* Base Image + Bottom Title */}
              <div className="group-hover:opacity-0 transition-opacity duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 p-3">
                  <p className="text-white text-lg font-medium">{item.title}</p>
                </div>
              </div>

              {/* Overlay (only visible on hover) */}
              <div
                className="absolute inset-0 bg-[#01172C] flex flex-col items-center justify-center text-center px-6 py-8 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="bg-white text-black p-3 rounded-full mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
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
