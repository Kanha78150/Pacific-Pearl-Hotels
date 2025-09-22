"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Star, Bed } from "lucide-react";

interface CardProps {
  name: string;
  location: string;
  phone: string;
  rating: string;
  rooms: number;
  image: string;
}

export default function Card({
  name,
  location,
  phone,
  rating,
  rooms,
  image,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="shadow-lg border-1 border-[#EEEEEE] bg-[#FFFFFF] overflow-hidden flex flex-col p-3"
    >
      {/* Optimized Next.js Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      <div className="flex-1 gap-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-medium text-[#000000] font-general mb-3">
            {name}
          </h3>

          {/* Icons in a single row */}
          <div className="flex flex-wrap items-center gap-4 justify-between text-[#000000] text-sm">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4 fill-[#000000]" /> {location}
            </div>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-[#000000]" /> {rating}
            </div>
            <div className="flex items-center">
              <Phone className="mr-1 h-4 w-4 fill-[#000000]" /> {phone}
            </div>
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4 fill-[#000000]" /> {rooms} Rooms
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <span className="border-1 border-[#1B8800] px-3 py-1 text-base font-normal font-general  text-[#1B8800] bg-[#DBFFC7] text-center">
            Current
          </span>
          <Link
            href="#"
            className="w-70 text-center px-5 py-2  bg-[#001931] text-white text-base font-normal font-general 
             shadow-md hover:bg-[#012d5a] hover:scale-105 focus:ring-2 
             focus:ring-offset-2 focus:ring-[#001931] transition-all duration-300 ease-in-out"
          >
            Visit Site
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
