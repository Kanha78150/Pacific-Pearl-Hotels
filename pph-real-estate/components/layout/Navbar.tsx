"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = ["EN", "ES"];
  const navItems = ["HOME", "ABOUT", "HOTELS", "SERVICES"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setMobileMenuOpen(false);
      setLangOpen(false);
    };

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Framer Motion variants (fixed with cubic-bezier easing arrays)
  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.42, 0, 1, 1] as const,
      },
    }),
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as const },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as const },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.42, 0, 1, 1] as const,
      },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative text-[#FFFFFF]">
        {/* Desktop Layout */}
        <div className="hidden lg:contents">
          {/* Left Nav */}
          <nav className="flex gap-8 text-base font-normal font-general">
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group transition-colors duration-300 hover:text-gray-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Centered Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.42, 0, 1, 1] }} // easeOut
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={67}
                height={64}
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </motion.div>

          {/* Right Nav */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.42, 0, 1, 1] }} // easeOut
            className="flex items-center gap-4 text-base relative font-general font-normal"
          >
            {/* Language Dropdown */}
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-gray-300 relative transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
            >
              <Globe className="w-4 h-4" />
              <span>{selectedLang}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  langOpen ? "rotate-180" : "rotate-0"
                }`}
              />

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 bg-white text-black shadow-lg rounded-md w-20 z-50 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                      >
                        {lang}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span className="text-gray-400">|</span>

            <Link
              href="tel:+1 (858) 964-5500"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              +1 (858) 964-5500
            </Link>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full flex items-center justify-between">
          {/* Mobile Logo - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.42, 0, 1, 1] }} // easeOut
          >
            <Link href="/">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={120}
                height={52}
                className="h-8 w-auto sm:h-9"
                priority
              />
            </Link>
          </motion.div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Language Dropdown */}
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-gray-300 relative transition-colors duration-300 text-sm"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
            >
              <Globe className="w-4 h-4" />
              <span>{selectedLang}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  langOpen ? "rotate-180" : "rotate-0"
                }`}
              />

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-7 right-0 bg-white text-black shadow-lg rounded-md w-16 z-50 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className="px-2 py-1.5 hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                      >
                        {lang}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.42, 0, 1, 1] }} // easeOut
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden bg-gradient-to-b from-[#00172C] to-[#000000] backdrop-blur-md border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-4 mb-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={mobileItemVariants}
                  >
                    <Link
                      href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                      className="block py-3 px-4 text-lg font-normal text-white hover:bg-white/5 rounded-lg transition-colors duration-300 border-l-2 border-transparent hover:border-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Contact */}
              <motion.div
                custom={navItems.length}
                initial="hidden"
                animate="visible"
                variants={mobileItemVariants}
                className="pt-4 border-t border-white/10"
              >
                <Link
                  href="tel:+1 (858) 964-5500"
                  className="flex items-center gap-3 py-3 px-4 text-lg text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                >
                  <span className="text-2xl">📞</span>
                  +1 (858) 964-5500
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
