"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { FadeUp, FadeLeft, FadeRight } from "@/components/MotionWrapper";

export default function Contact() {
  return (
    <div className="space-y-16 py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <FadeUp>
          <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl mt-2">
            Contact Shree Maruti Auto World
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Have a question about a repair estimate, insurance claim, or ceramic coating service? Get in touch with our Rajkot desk.
          </p>
        </FadeUp>
      </div>

      {/* Main Grid: Form vs Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Info Column */}
        <FadeLeft className="lg:col-span-1 space-y-8">
          <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-neutral-900">Workshop Details</h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We welcome walk-in inspections during our standard workshop working hours.
            </p>

            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 text-red-650 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950">Call Helpline</h4>
                  <a href="tel:+917069290692" className="text-neutral-500 hover:text-red-600 transition-colors">
                    +91 70692 90692
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 text-red-650 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950">Email Info</h4>
                  <a href="mailto:shreemarutiautoworld@gmail.com" className="text-neutral-500 hover:text-red-600 transition-colors">
                    shreemarutiautoworld@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 text-red-650 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950">Location</h4>
                  <a
                    href="https://maps.app.goo.gl/7D9AqH6aowd7ccHG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-red-650 transition-colors leading-relaxed block"
                  >
                    Hari Nagar - 4/6 Corner, Near Shivalay Apartment, Opp. Tulsi Baug Garden, Near 150 ft. Ring Road, Raiya Telecome Exchange Road, Rajkot - 360007
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 text-red-650 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-950">Working Hours</h4>
                  <p className="text-neutral-500">Mon - Sat: 09:00 AM - 08:00 PM</p>
                  <p className="text-neutral-400">Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Quick Actions (WhatsApp Booking) */}
            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <a
                href="https://wa.me/917069290692?text=Hi%20Maruti%20Auto%20World%2C%20I%20want%20to%20inquire%20about%20a%20car%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-xs"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M12.016 2C6.488 2 2 6.488 2 12.016c0 2.112.656 4.08 1.776 5.712L2 22l4.48-1.776A10.027 10.027 0 0 0 12.016 22c5.528 0 10.016-4.488 10.016-10.016S17.544 2 12.016 2zm0 18.032c-1.808 0-3.504-.48-4.96-1.328l-3.504 1.392 1.392-3.504a8.038 8.038 0 0 1-1.328-4.96c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8zm4.368-5.712c-.272-.136-1.616-.8-1.872-.896-.256-.096-.448-.144-.64.144-.192.288-.736.896-.896 1.072-.16.176-.32.192-.592.048-.272-.144-1.152-.424-2.192-1.36-.816-.728-1.36-1.624-1.52-1.896-.16-.272-.016-.416.128-.56.128-.128.272-.32.416-.48.128-.16.176-.272.272-.464.096-.192.048-.352-.016-.496-.064-.144-.64-1.536-.88-2.112-.224-.56-.464-.48-.64-.496-.16-.016-.352-.016-.544-.016s-.496.064-.752.336c-.256.272-.976.96-.976 2.336s1 2.688 1.136 2.864c.144.176 1.952 2.992 4.736 4.192 2.56 1.104 2.56.736 3.024.688.464-.048 1.504-.624 1.712-1.216.208-.592.208-1.104.144-1.216z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Connect */}
            <div className="pt-6 border-t border-neutral-100 space-y-3">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/p/Shree-Maruti-Auto-World-100066538038413/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-red-50 text-neutral-500 hover:text-red-650 flex items-center justify-center transition-all border border-neutral-200 hover:border-red-200"
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
                  className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-red-50 text-neutral-500 hover:text-red-650 flex items-center justify-center transition-all border border-neutral-200 hover:border-red-200"
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
          </div>
        </FadeLeft>

        {/* Form Column */}
        <FadeRight className="lg:col-span-2 bg-white border border-neutral-100 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-neutral-900">Send an Inquiry Message</h2>
            <p className="text-xs text-neutral-500 mt-1">Our customer service advisor will reply within 2 working hours.</p>
          </div>
          <ContactForm />
        </FadeRight>
      </div>

      {/* Embedded Map Section */}
      <FadeUp className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-neutral-100 shadow-xs">
        <iframe
          src="https://maps.google.com/maps?q=SHREE+MARUTI+AUTO+WORLD,+Hari+Nagar,+Rajkot&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </FadeUp>
    </div>
  );
}
