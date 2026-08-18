"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/MotionWrapper";

const testimonials = [
  {
    name: "Rahul Dabhi",
    role: "Local Business Owner",
    vehicle: "Ford EcoSport",
    rating: 4,
    review: "I got my EcoSport serviced a few days back. Very cooperative staff and charges were also reasonable. Overall a good experience with them.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Meet Vora",
    role: "Textile Merchant",
    vehicle: "Maruti Suzuki Swift",
    rating: 5,
    review: "Best service ever in Rajkot for your four wheeler. I would suggest everyone to visit this place, they give the best service at an economical price.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Hiren Patel",
    role: "IT Consultant",
    vehicle: "Hyundai i20",
    rating: 4,
    review: "After buying a car, this was the first time I got proper service. They also suggested the problems that needed to be resolved and did fabulous work.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Parth Savaliya",
    role: "Marketing Head",
    vehicle: "Honda Amaze",
    rating: 5,
    review: "I visited this place last week and got an accessory installation done. Awesome service and on-time delivery.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Ankit Maru",
    role: "Contractor",
    vehicle: "Mahindra Scorpio",
    rating: 5,
    review: "Best car service station in Rajkot at affordable prices. Complete all-brand car service with genuine spare parts.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Dr. Shruti Vyas",
    role: "Pediatrician",
    vehicle: "Honda City (i-VTEC)",
    rating: 5,
    review: "Excellent service! I opted for their pick-and-drop service in Rajkot. They sent me video updates of my car's engine oil flush and air filter replacements on WhatsApp. Highly trustable workshop, they did not upsell unnecessary repairs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Meera Joshi",
    role: "Professor",
    vehicle: "Tata Nexon (Revotorq)",
    rating: 5,
    review: "I take my Nexon here for periodic maintenance services. Their digital diagnostic scans are very helpful—they identify fault codes immediately. Their mechanics are knowledgeable, polite, and explain the technical issues in simple terms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    source: "google",
  },
  {
    name: "Nikhil Patel",
    role: "Corporate Executive",
    vehicle: "Mahindra XUV700",
    rating: 5,
    review: "Excellent workshop with state of the art diagnostic tools. Plugg in their OBD scanner, identified the faulty wheel speed sensor, and replaced it in no time. Great service!",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    source: "google",
  }
];

export default function Testimonials() {
  return (
    <div className="space-y-16 py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <FadeUp>
          <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Testimonials</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl mt-2">
            What Our Customers Say
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Read real feedback from car owners in Rajkot who trust Shree Maruti Auto World for mechanical maintenance, insurance painting claims, and premium detailing.
          </p>
        </FadeUp>
      </div>

      <FadeUp className="max-w-md mx-auto">
        <div className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-2xs flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-6.19-4.53z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-bold text-neutral-900">Google Rating</span>
          </div>
          
          <div className="space-y-1">
            <div className="text-4xl font-extrabold text-neutral-950">4.8</div>
            <div className="flex justify-center gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
              ))}
              <Star className="w-4 h-4 text-neutral-200 fill-neutral-100" />
            </div>
            <p className="text-xs text-neutral-500 font-semibold">Based on 95+ Verified Customer Reviews</p>
          </div>

          <a
            href="https://share.google/ymm5NDwaZedlUpT9P"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-red-650 bg-neutral-50 hover:bg-red-50 border border-neutral-200 hover:border-red-200 px-5 py-2.5 rounded-xl transition-all shadow-3xs"
          >
            Write a Review on Google
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <StaggerItem key={idx}>
            <HoverLift className="bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between h-full relative group">
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                    {[...Array(5 - t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-neutral-200 fill-neutral-100" />
                    ))}
                  </div>
                  {t.source === "google" && (
                    <div className="flex items-center gap-1.5 bg-neutral-50 px-2.5 py-1 rounded-lg border border-neutral-100 shadow-3xs">
                      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.87-4.53-6.19-4.53z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-[9px] text-neutral-500 font-bold">Google</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-50 mt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 leading-none">{t.name}</h4>
                  <p className="text-[10px] text-neutral-400 mt-1">{t.role}</p>
                  <span className="inline-block bg-red-50 text-red-650 text-[10px] font-semibold px-2 py-0.5 rounded-md mt-2">
                    {t.vehicle}
                  </span>
                </div>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-lg font-bold text-neutral-900">Be Our Next Satisfied Customer</h3>
        <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
          Book your periodic maintenance service or premium detailing slot today and feel the Shree Maruti Auto World difference.
        </p>
        <Link
          href="/book-appointment"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-6 py-3 rounded-full shadow-xs hover:shadow-md transition-all"
        >
          Book An Appointment
        </Link>
      </FadeUp>
    </div>
  );
}
