"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-neutral-900 text-white text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
          <span>Rajkot's Trusted Multi-Brand Car Workshop</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+917069290692" className="flex items-center gap-1 hover:text-red-400 transition-colors">
            <Phone className="w-3 h-3 text-red-500" />
            <span>+91 70692 90692</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-xs"
            : "bg-white border-b border-neutral-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col justify-center">
              <span className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                SHREE MARUTI <span className="text-red-600">AUTO</span> WORLD
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold -mt-0.5">
                Multi Brand Car Workshop
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors py-2 ${
                      isActive ? "text-red-600 font-semibold" : "text-neutral-600 hover:text-neutral-950"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/book-appointment"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-neutral-100 bg-white overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-neutral-100 mt-4 space-y-3">
                  <a
                    href="tel:+917069290692"
                    className="flex items-center justify-center gap-2 w-full border border-neutral-200 text-neutral-700 px-4 py-3 rounded-xl text-base font-semibold hover:bg-neutral-50"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    Call Us Now
                  </a>
                  <Link
                    href="/book-appointment"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl text-base font-semibold text-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
