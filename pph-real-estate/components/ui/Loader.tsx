"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-[9999]">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </motion.div>
    </div>
  );
}
