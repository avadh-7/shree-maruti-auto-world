"use client";

import React, { useState } from "react";
import Image from "next/image";
import workshop1 from "@/assets/workshop_1.webp";
import workshop2 from "@/assets/workshop_2.webp";
import workshop3 from "@/assets/workshop_3.webp";
import workshop4 from "@/assets/workshop_4.webp";
import workshop5 from "@/assets/workshop_5.webp";
import teamAtWorkshop1 from "@/assets/team_at_workshop_1.webp";
import teamAtWorkshop2 from "@/assets/team_at_workshop_2.webp";
import teamAtWorkshop3 from "@/assets/team_at_workshop_3.webp";
import customerDelivery1 from "@/assets/customer_delivery_1.webp";
import customerDelivery2 from "@/assets/customer_delivery_2.webp";
import customerDelivery3 from "@/assets/customer_delivery_3.webp";
import customerDelivery4 from "@/assets/customer_delivery_4.webp";
import carServiceImg from "@/assets/general_car_service.webp";
import wheelAlignmentImg from "@/assets/wheel_alignment.webp";
import computerDiagnosticsImg from "@/assets/computer_diagnostics.webp";
import dentPaintImg from "@/assets/dent_paint.webp";
import { FadeUp, Scale, StaggerContainer, StaggerItem, HoverLift } from "@/components/MotionWrapper";

const categories = ["All", "Workshop", "Services", "Customer Delivery", "Team at Work"];

const galleryItems = [
  {
    category: "Workshop",
    image: workshop1,
    caption: "Grand opening and ribbon-cutting inauguration ceremony of Shree Maruti Auto World.",
  },
  {
    category: "Workshop",
    image: workshop2,
    caption: "Multi-car mechanical service bays showing several SUVs undergoing scheduled maintenance.",
  },
  {
    category: "Workshop",
    image: workshop3,
    caption: "Modern mechanical workshop equipped with red dual-post hydraulic car lifts.",
  },
  {
    category: "Workshop",
    image: workshop4,
    caption: "Mechanical repair bay showing multiple SUVs on post lifts with their hoods open.",
  },
  {
    category: "Workshop",
    image: workshop5,
    caption: "Clean general servicing and inspection bay floor with a sedan and SUVs in queue.",
  },
  {
    category: "Services",
    image: carServiceImg,
    caption: "Comprehensive periodic general servicing and 40-point car scanner diagnostics check.",
  },
  {
    category: "Services",
    image: wheelAlignmentImg,
    caption: "Precision 3D computerized wheel alignment testing and steering sensor calibration.",
  },
  {
    category: "Services",
    image: computerDiagnosticsImg,
    caption: "OEM-approved diagnostic scanning to read engine error codes and sensor readings.",
  },
  {
    category: "Services",
    image: dentPaintImg,
    caption: "Precise scratch removal and factory-grade painting inside a dust-free paint booth.",
  },
  {
    category: "Customer Delivery",
    image: customerDelivery1,
    caption: "Happy customer receiving the key for their newly serviced and decorated black Scorpio SUV.",
  },
  {
    category: "Customer Delivery",
    image: customerDelivery2,
    caption: "Ceremonial key handover to a family receiving their fully detailed black premium car.",
  },
  {
    category: "Customer Delivery",
    image: customerDelivery3,
    caption: "Owner celebrating key handover for their newly serviced grey Maruti Suzuki sedan.",
  },
  {
    category: "Customer Delivery",
    image: customerDelivery4,
    caption: "Delighted couple receiving the keys to their detailed black premium SUV handover.",
  },
  {
    category: "Team at Work",
    image: teamAtWorkshop1,
    caption: "Friendly workshop technician performing engine maintenance check under the hood.",
  },
  {
    category: "Team at Work",
    image: teamAtWorkshop2,
    caption: "Collaborative team of 5 mechanics troubleshooting vehicle front bumper and radiator issues.",
  },
  {
    category: "Team at Work",
    image: teamAtWorkshop3,
    caption: "Focused senior technician in blue coveralls performing precise engine tuning and servicing.",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="space-y-16 py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <FadeUp>
          <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Our Portfolio</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl mt-2">
            Workshop Gallery
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Take a visual tour of our Rajkot workshop, inspect our technicians in action, and explore our premium auto detailing results.
          </p>
        </FadeUp>
      </div>

      {/* Category Tabs */}
      <Scale className="flex gap-2 p-1 bg-neutral-100 rounded-2xl overflow-x-auto w-full md:w-max mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shrink-0 ${
              activeCategory === cat
                ? "bg-white text-red-650 shadow-xs"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </Scale>

      {/* Standard Image Grids */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <StaggerItem key={idx}>
            <HoverLift className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-xs flex flex-col group h-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <span className="absolute top-4 left-4 bg-neutral-900/80 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex-1 bg-white border-t border-neutral-50 flex items-center">
                <p className="text-xs text-neutral-500 leading-relaxed">{item.caption}</p>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
