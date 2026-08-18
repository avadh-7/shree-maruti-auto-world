"use client";

import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917069290692"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg relative group transition-colors duration-300"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping pointer-events-none" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-350 shadow-md whitespace-nowrap">
          Chat on WhatsApp
        </span>
        
        <svg
          viewBox="0 0 24 24"
          className="absolute inset-0 m-auto w-7 h-7 fill-white"
        >
          <path d="M12.016 2C6.488 2 2 6.488 2 12.016c0 2.112.656 4.08 1.776 5.712L2 22l4.48-1.776A10.027 10.027 0 0 0 12.016 22c5.528 0 10.016-4.488 10.016-10.016S17.544 2 12.016 2zm0 18.032c-1.808 0-3.504-.48-4.96-1.328l-3.504 1.392 1.392-3.504a8.038 8.038 0 0 1-1.328-4.96c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8zm4.368-5.712c-.272-.136-1.616-.8-1.872-.896-.256-.096-.448-.144-.64.144-.192.288-.736.896-.896 1.072-.16.176-.32.192-.592.048-.272-.144-1.152-.424-2.192-1.36-.816-.728-1.36-1.624-1.52-1.896-.16-.272-.016-.416.128-.56.128-.128.272-.32.416-.48.128-.16.176-.272.272-.464.096-.192.048-.352-.016-.496-.064-.144-.64-1.536-.88-2.112-.224-.56-.464-.48-.64-.496-.16-.016-.352-.016-.544-.016s-.496.064-.752.336c-.256.272-.976.96-.976 2.336s1 2.688 1.136 2.864c.144.176 1.952 2.992 4.736 4.192 2.56 1.104 2.56.736 3.024.688.464-.048 1.504-.624 1.712-1.216.208-.592.208-1.104.144-1.216z" />
        </svg>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+917069290692"
        className="pointer-events-auto w-14 h-14 bg-red-650 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg relative group transition-colors duration-300"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-red-600/30 animate-pulse pointer-events-none" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-350 shadow-md whitespace-nowrap">
          Call Workshop
        </span>

        <Phone className="absolute inset-0 m-auto w-6 h-6 fill-white text-red-650 stroke-[1.5]" />
      </motion.a>
    </div>
  );
}
