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
  link: string;
  status: string;
}

export default function Card({
  name,
  location,
  phone,
  rating,
  rooms,
  image,
  link,
  status,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="shadow-lg border border-[#EEEEEE] bg-[#FFFFFF] overflow-hidden flex flex-col p-3 h-full"
    >
      {/* Optimized Next.js Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Content container with flex-grow to push buttons to bottom */}
      <div className="flex-1 flex flex-col">
        {/* Title section with consistent height */}
        <div className="mb-4">
          <h3 className="text-xl font-medium text-[#000000] font-general leading-tight min-h-[3rem] flex items-center">
            {name}
          </h3>
        </div>

        {/* Info grid - 2x2 layout for better alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-1">
          <div className="flex items-center text-[#000000] text-sm">
            <MapPin className="mr-2 h-4 w-4 fill-[#000000] flex-shrink-0" />
            <span className="truncate" title={location}>
              {location}
            </span>
          </div>

          <div className="flex items-center text-[#000000] text-sm">
            <Star className="mr-2 h-4 w-4 fill-[#000000] flex-shrink-0" />
            <span>{rating}</span>
          </div>

          <div className="flex items-center text-[#000000] text-sm">
            <Phone className="mr-2 h-4 w-4 fill-[#000000] flex-shrink-0" />
            <span className="truncate" title={phone}>
              {phone}
            </span>
          </div>

          <div className="flex items-center text-[#000000] text-sm">
            <Bed className="mr-2 h-4 w-4 fill-[#000000] flex-shrink-0" />
            <span>{rooms} Rooms</span>
          </div>
        </div>

        {/* Buttons section - always at bottom */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <span className="border border-[#1B8800] px-3 py-2 text-sm font-normal font-general text-[#1B8800] bg-[#DBFFC7] text-center rounded-sm flex-shrink-0">
            {status}
          </span>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-5 py-2 bg-[#001931] text-white text-sm font-normal font-general rounded-sm shadow-md hover:bg-[#012d5a] hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-[#001931] transition-all duration-300 ease-in-out"
          >
            Visit Site
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
