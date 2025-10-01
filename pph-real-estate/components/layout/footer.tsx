"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
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
    <section>
      {/* CTA Section above footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-[#01172C] max-w-5xl mx-auto mt-20 mb-20 px-6 md:px-8 py-10 md:py-14 text-center shadow-lg"
      >
        <h2 className="text-5xl md:text-3xl font-normal text-[#FFFFFF] mb-4 font-gilda">
          Partner with Us in Hospitality Success
        </h2>
        <p className="text-[#DCDCDC] font-general font-normal text-xl mb-6 max-w-4xl mx-auto leading-snug">
          Partner with us to unlock exceptional investment opportunities and
          achieve remarkable returns. Our experienced team is ready to elevate
          your hospitality assets to new heights.
        </p>

        {/* Smart Join Us Button */}
        {isMobile ? (
          <Link
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#FFFFFF] px-6 py-2 rounded text-[#FFFFFF] text-base font-medium font-general cursor-pointer hover:bg-white hover:text-[#01172C] transition"
          >
            Contact Us
          </Link>
        ) : (
          <Link
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#FFFFFF] px-6 py-2 rounded text-[#FFFFFF] text-base font-medium font-general cursor-pointer hover:bg-white hover:text-[#01172C] transition"
          >
            Contact Us
          </Link>
        )}
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#000926] text-white pt-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto px-6 md:px-8 gap-x-7">
          {/* Logo & Description */}
          <div className="max-w-sm mb-8 md:mb-0">
            <Image
              src="/images/Logo.png"
              alt="PPH Logo"
              width={40}
              height={40}
            />
            <p className="mt-4 text-[#F6F4E9] font-satoshi font-light text-base leading-snug">
              Luxort combines timeless elegance with modern luxury, offering
              unparalleled comfort and unforgettable experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-[#F6F4E9] font-general text-base mb-4 font-normal">
              Quick Links
            </h4>
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  href="/"
                  className="text-[#F6F4E9] text-base font-light font-satoshi"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#F6F4E9] text-base font-light font-satoshi"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[#F6F4E9] text-base font-light font-satoshi"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-[#F6F4E9] text-base font-light font-satoshi"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#F6F4E9] text-base font-light font-satoshi"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[#F6F4E9] text-xl font-normal mb-4 font-general">
              Social Media
            </h4>
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  href="https://www.linkedin.com/company/pacific-pearl-hotels-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6F4E9] font-light text-base font-satoshi"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/pacificpearlhotels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6F4E9] font-light text-base font-satoshi"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/pacificpearlhotels/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6F4E9] font-light text-base font-satoshi"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222b3a] mt-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6 md:px-8">
            <span className="text-[#F6F4E9] text-base font-satoshi font-light">
              © 2025 Luxort, All Right Reserved
            </span>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-[#F6F4E9] text-base font-satoshi font-light"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[#F6F4E9] text-base font-satoshi font-light"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
