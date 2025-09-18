"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    image: "/images/projects/project1.jpg",
    title: "Le Méridien Cancun Resort & Spa",
    subtitle: "#1 Destination Spa in the U.S. – Condé Nast",
  },
  {
    image: "/images/projects/project2.jpg",
    title: "Mayfair Resort & Spa",
    subtitle: "#1 Destination Spa in the U.S. – Condé Nast",
  },
  {
    image: "/images/projects/project2.jpg",
    title: "Villaitana Golf & Tennis Resort",
    subtitle: "#1 Destination Spa in the U.S. – Condé Nast",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Our Featured Projects
        </h2>
        <p className="text-gray-600 mb-6">
          Our commitment to proven performance ensures consistent success across
          our properties. We leverage data-driven strategies to maximize returns
          and enhance guest satisfaction.
        </p>
        <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
          View our Flagship Resorts
        </button>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={429}
              height={260}
              className="w-full h-[260px] object-cover"
            />
            <h3 className="text-lg font-medium mt-3">{project.title}</h3>
            <p className="text-gray-500 text-sm">{project.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
