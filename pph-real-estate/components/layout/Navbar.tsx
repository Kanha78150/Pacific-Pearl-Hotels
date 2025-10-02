"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: {
          new (options: any, elementId: string): any;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export {};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["HOME", "ABOUT", "HOTELS", "SERVICES"];

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const desktopTranslateHolderRef = useRef<HTMLDivElement | null>(null);
  const mobileTranslateHolderRef = useRef<HTMLDivElement | null>(null);

  // Load Google Translate script and init once
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (window?.google && window.google?.translate) {
        // script already present
        if (typeof window.googleTranslateElementInit === "function") {
          window.googleTranslateElementInit();
        }
        return;
      }

      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // global callback the script will call
      window.googleTranslateElementInit = () => {
        try {
          new window.google!.translate!.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es",
              layout:
                window.google!.translate!.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        } catch (err) {
          console.error("Google Translate init error:", err);
        }
      };
    };

    addGoogleTranslateScript();
  }, []);

  // Move the single translate element between desktop and mobile holders when mobile menu toggles
  useEffect(() => {
    const googleEl = document.getElementById("google_translate_element");
    const desktopHolder = desktopTranslateHolderRef.current;
    const mobileHolder = mobileTranslateHolderRef.current;

    if (!googleEl) return;

    if (mobileMenuOpen && mobileHolder) {
      // move into mobile menu holder
      mobileHolder.appendChild(googleEl);
    } else if (desktopHolder) {
      // move back to desktop holder
      desktopHolder.appendChild(googleEl);
    }
  }, [mobileMenuOpen]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside menu *and* menu button
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!mobileMenuOpen) return;
      const menuEl = mobileMenuRef.current;
      const btnEl = menuButtonRef.current;
      const target = e.target as Node | null;
      if (
        menuEl &&
        btnEl &&
        target &&
        !menuEl.contains(target) &&
        !btnEl.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Framer Motion Variants
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between relative text-white">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left Nav */}
          <nav className="flex gap-8 text-base font-normal">
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

          {/* Center Logo */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={67}
              height={64}
              className="h-10 w-auto hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Right Nav */}
          <div className="flex items-center gap-6">
            {/* Desktop holder for the single Google Translate element */}
            <div
              ref={desktopTranslateHolderRef}
              className="flex items-center gap-2 h-8 bg-transparent rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* single element with the expected id */}
              <div id="google_translate_element" />
            </div>

            <span className="text-gray-400">|</span>

            <Link
              href="tel:+1 (858) 964-5500"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              +1 (858) 964-5500
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between w-full">
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

          <button
            ref={menuButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((s) => !s);
            }}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-[#00172C] to-[#000000] border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                    className="block py-3 px-4 text-lg text-white hover:bg-white/5 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* Mobile holder - the single translate element will be moved here when menu opens */}
              <div
                ref={mobileTranslateHolderRef}
                className="flex items-center gap-2 h-8 bg-transparent rounded-lg mt-4"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
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
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-2xl">📞</span>
                +1 (858) 964-5500
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
