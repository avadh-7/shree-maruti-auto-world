import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                SHREE MARUTI <span className="text-red-600">AUTO</span> WORLD
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
                Multi Brand Car Workshop
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Shree Maruti Auto World is Rajkot's leading multi-brand car workshop, dedicated to providing high-quality repair, service, and detailing with maximum customer satisfaction.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/p/Shree-Maruti-Auto-World-100066538038413/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-red-650 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs border border-neutral-850"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shreemarutiautoworld/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-900 hover:bg-red-650 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs border border-neutral-850"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-red-500 flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-red-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Business Hours
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Monday - Saturday</p>
                  <p className="text-neutral-500">09:00 AM - 08:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-500 font-medium">Sunday</p>
                  <p className="text-neutral-500">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Contact Details
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <a href="tel:+917069290692" className="text-neutral-400 hover:text-white transition-colors">
                  +91 70692 90692
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <a href="mailto:shreemarutiautoworld@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                  shreemarutiautoworld@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/7D9AqH6aowd7ccHG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-white transition-colors"
                >
                  Hari Nagar - 4/6 Corner,<br />
                  Near Shivalay Apartment,<br />
                  Opp. Tulsi Baug Garden,<br />
                  Near 150 ft. Ring Road,<br />
                  Raiya Telecome Exchange Road,<br />
                  Rajkot - 360007
                </a>
              </li>
            </ul>
          </div>

          {/* Small Map */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Our Location
            </h3>
            <div className="relative h-32 rounded-xl overflow-hidden border border-neutral-850">
              <iframe
                src="https://maps.google.com/maps?q=SHREE+MARUTI+AUTO+WORLD,+Hari+Nagar,+Rajkot&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-neutral-900 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} Shree Maruti Auto World. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
