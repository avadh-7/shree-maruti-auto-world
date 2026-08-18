"use client";

import React from "react";
import Image from "next/image";
import workshop1Img from "@/assets/workshop_1.webp";
import chetanDodiyaImg from "@/assets/chetan_dodiya.webp";
import Link from "next/link";
import { ShieldCheck, Heart, Users, Target, ShieldAlert, Sparkles, Award } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, Scale, StaggerContainer, StaggerItem, HoverLift } from "@/components/MotionWrapper";

const values = [
  {
    title: "Uncompromising Quality",
    description: "We use top-tier tools, OEM parts, and trained technicians to ensure dealership-level quality repairs.",
    icon: Award,
  },
  {
    title: "100% Transparency",
    description: "Every diagnostics fault, required repair, and pricing component is clearly explained beforehand.",
    icon: ShieldCheck,
  },
  {
    title: "Customer First Service",
    description: "From towing and pick-up services to claim assistance, your comfort is our absolute priority.",
    icon: Heart,
  },
  {
    title: "Multi-Brand Capabilities",
    description: "Specialized diagnostics and mechanical skills tailored for all major global automotive brands.",
    icon: Users,
  },
];

export default function About() {
  return (
    <div className="space-y-24 py-16 pb-24">
      {/* Intro Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <FadeUp>
            <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Who We Are</span>
            <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl mt-2">
              Shree Maruti Auto World
            </h1>
            <p className="text-base text-neutral-500 leading-relaxed mt-4">
              Rajkot's premium multi-brand workshop, setting benchmarks in car repairs, denting-painting, computer diagnostics, and ceramic detailing since inception.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeLeft className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              A Legacy of Automotive Care in Rajkot
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Shree Maruti Auto World was founded with a clear vision: to bridge the gap between expensive authorized dealer service centers and unreliable local mechanics. Located at Hari Nagar in Rajkot, we have built a premium, state-of-the-art facility equipped with the latest automotive diagnostic software, paint booths, and precision mechanical bays.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Whether you drive a compact hatchback, an family SUV, or a luxury sedan, our certified team handles your vehicle with absolute care. We provide a transparent workshop experience where we document every diagnostic report and discuss repair options with you before starting work.
            </p>
          </FadeLeft>

          <FadeRight className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-md">
            <Image
              src={workshop1Img}
              alt="Shree Maruti Auto World Workshop and Mechanics"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </FadeRight>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeLeft className="bg-white border border-neutral-100 rounded-3xl p-8 space-y-4 shadow-2xs">
            <div className="w-12 h-12 bg-red-50 text-red-650 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Our Mission</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              To provide Rajkot's car owners with dependable, high-quality, and transparent multi-brand maintenance solutions. We strive to offer dealership-level precision at transparent, fair prices, saving customers time and anxiety.
            </p>
          </FadeLeft>

          <FadeRight className="bg-white border border-neutral-100 rounded-3xl p-8 space-y-4 shadow-2xs">
            <div className="w-12 h-12 bg-red-50 text-red-650 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Our Vision</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              To become the most trusted multi-brand automotive service provider in Saurashtra, recognized for technical innovation, transparent workshop practices, and premium cosmetic detailing.
            </p>
          </FadeRight>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeUp className="space-y-2">
            <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Our Foundation</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
              Values That Drive Us
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Every repair, oil change, and detailing job is guided by our primary core principles.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <StaggerItem key={idx}>
              <HoverLift className="bg-white border border-neutral-100 rounded-2xl p-6 space-y-4 h-full shadow-2xs">
                <div className="w-10 h-10 bg-red-50 text-red-650 rounded-xl flex items-center justify-center">
                  <val.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900">{val.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{val.description}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Our Leadership */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeUp className="space-y-2">
              <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Our Leadership</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                Meet Our Founder
              </h2>
              <p className="text-sm text-neutral-500">
                Pioneering dealership-level quality and honest car care in Rajkot.
              </p>
            </FadeUp>
          </div>

          <div className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-xs p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Profile Image */}
              <FadeLeft className="md:col-span-5 relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-neutral-100 shadow-2xs">
                <Image
                  src={chetanDodiyaImg}
                  alt="Chetan Dodiya - Founder & Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </FadeLeft>

              {/* Bio Details */}
              <FadeRight className="md:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-neutral-900">Chetan Dodiya</h3>
                  <p className="text-xs font-bold text-red-650 uppercase tracking-widest">Founder & Chief Workshop Director</p>
                </div>
                
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Chetan Dodiya founded Shree Maruti Auto World with a commitment to bridge the gap between expensive authorized dealership networks and local mechanics. With over 20+ years of hands-on technical excellence and workshop management experience, he directs the multi-brand engineering operations in Rajkot.
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Under his management, the workshop has been equipped with international-grade tools, computerized OBD scanners, Caroliner frame pullers, and premium paint booths. His vision ensures that every passenger vehicle serviced at our facility leaves running at optimum performance and structural safety.
                </p>
              </FadeRight>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Why Trust Us */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <Scale className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative shadow-lg">
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for a Reliable Car Service?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Shree Maruti Auto World makes it simple: genuine OEM parts, direct diagnostics reporting, and a 6-month workshop repair warranty. Book your slot online today.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="bg-red-650 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shrink-0 transition-all duration-300 hover:-translate-y-0.5"
          >
            Request Booking
          </Link>
        </Scale>
      </section>
    </div>
  );
}
