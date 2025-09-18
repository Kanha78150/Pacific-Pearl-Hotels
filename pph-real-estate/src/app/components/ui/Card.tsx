"use client";

import Image from "next/image";
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
      className="rounded-xl shadow-lg border bg-white overflow-hidden flex flex-col p-3"
    >
      {/* Optimized Next.js Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="flex-1 gap-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-3">{name}</h3>

          {/* Icons in a single row */}
          <div className="flex flex-wrap items-center gap-4 justify-between text-gray-600 text-sm">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" /> {location}
            </div>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-yellow-500 fill-yellow-500" />{" "}
              {rating}
            </div>
            <div className="flex items-center">
              <Phone className="mr-1 h-4 w-4" /> {phone}
            </div>
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" /> {rooms} Rooms
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-green-700 font-medium">
            Current
          </span>
          <a
            href="#"
            className="px-4 py-1 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800"
          >
            Visit Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}
