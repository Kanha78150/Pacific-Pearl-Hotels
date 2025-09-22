"use client";

import { motion } from "framer-motion";

export default function AboutSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 scroll-mt-24"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </motion.section>
  );
}
