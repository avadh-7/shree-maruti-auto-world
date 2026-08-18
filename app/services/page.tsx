"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Search, ArrowRight } from "lucide-react";
import { servicesData } from "./servicesData";
import { FadeUp, Scale, StaggerContainer, StaggerItem, HoverLift } from "@/components/MotionWrapper";

const categories = ["All", "Maintenance", "Repairs", "Cosmetics"];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = servicesData.filter((svc) => {
    const matchesCategory = activeCategory === "All" || svc.category === activeCategory;
    const matchesSearch = svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          svc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <FadeUp>
          <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Our Service Catalog</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl mt-2">
            Professional Workshop Services
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Choose from our specialized categories. We use factory-certified tooling, Caroliner straighteners, and paint booths for passenger vehicles of all brands.
          </p>
        </FadeUp>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-neutral-100 pb-8 pt-4">
        {/* Category Tabs */}
        <Scale className="flex gap-2 p-1 bg-neutral-100 rounded-2xl overflow-x-auto w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shrink-0 ${
                activeCategory === cat
                  ? "bg-white text-red-600 shadow-xs"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </Scale>

        {/* Search Input */}
        <Scale className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:ring-2 focus:ring-red-650 bg-white"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
        </Scale>
      </div>

      {/* Services Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((svc, idx) => {
            const IconComponent = (LucideIcons as any)[svc.iconName] || LucideIcons.Wrench;
            return (
              <StaggerItem key={idx}>
                <HoverLift className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-xs h-full flex flex-col group">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-md shadow-xs">
                      {svc.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 self-center">{svc.title}</h3>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed flex-1">
                      {svc.description}
                    </p>

                    <div className="pt-4 border-t border-neutral-50 grid grid-cols-2 gap-3">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="text-center border border-neutral-200 hover:border-red-600 hover:text-red-600 text-neutral-700 text-xs font-semibold py-3 rounded-xl transition-all inline-flex items-center justify-center gap-1"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/book-appointment?service=${encodeURIComponent(svc.title)}`}
                        className="text-center bg-neutral-900 hover:bg-red-650 text-white text-xs font-semibold py-3 rounded-xl transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            );
          })
        ) : (
          <div className="col-span-full text-center py-16 text-neutral-400 text-sm">
            No services match your search query. Try another term.
          </div>
        )}
      </StaggerContainer>
    </div>
  );
}
