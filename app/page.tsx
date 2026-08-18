"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroBgImg from "@/assets/hero_bg_img.webp";
import carServiceImg from "@/assets/general_car_service.webp";
import computerDiagnosticsImg from "@/assets/computer_diagnostics.webp";
import dentPaintImg from "@/assets/dent_paint.webp";
import Link from "next/link";
import {
  Wrench,
  Shield,
  ThumbsUp,
  Award,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, Scale, StaggerContainer, StaggerItem, HoverLift } from "@/components/MotionWrapper";

const servicesPreview = [
  {
    title: "General Car Service",
    description: "Comprehensive multi-point inspection, engine oil replacement, filter changes, and fluid top-offs.",
    image: carServiceImg,
    icon: Wrench,
  },
  {
    title: "Computer Diagnostics",
    description: "Advanced OBD scanners to read error codes, locate faults, and decode electronic engine problems.",
    image: computerDiagnosticsImg,
    icon: Sparkles,
  },
  {
    title: "Denting & Painting",
    description: "Precision dent removal and factory-grade painting using modern color matching technology.",
    image: dentPaintImg,
    icon: Shield,
  },
];

const faqs = [
  {
    question: "Do you service luxury and premium car brands?",
    answer: "Yes, Shree Maruti Auto World is a fully equipped multi-brand workshop. We service everything from popular hatchbacks to premium sedans, SUVs, and luxury cars from brands like Mercedes-Benz, BMW, Audi, Hyundai, Suzuki, Honda, and Toyota.",
  },
  {
    question: "How long does a general car service take?",
    answer: "A standard general car service typically takes about 3 to 4 hours. This includes engine oil change, filter replacements, fluid checkups, brake cleaning, and a complete vehicle inspection. We also offer pick-up and drop-off service in Rajkot for your convenience.",
  },
  {
    question: "Do you use original (OEM) spare parts?",
    answer: "Absolutely. We only use Genuine OEM (Original Equipment Manufacturer) or OES (Original Equipment Supplier) parts that meet or exceed manufacturer specifications. Your car's warranty and safety are always preserved.",
  },
  {
    question: "How do I claim insurance for accidental repairs?",
    answer: "We offer comprehensive insurance claim assistance. Bring your vehicle to Shree Maruti Auto World, and our team will handle the surveyor inspection, documentation, repair estimation, and coordinate directly with your insurance company to facilitate cashless repairs.",
  },
  {
    question: "What is your warranty policy on repairs?",
    answer: "We offer a workshop warranty on major repairs and services: 6 months or 5,000 kms (whichever is earlier) on mechanical parts and labor, and up to 2 years on premium painting work.",
  },
];

const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Mahindra",
  "Honda",
  "Toyota",
  "Kia",
  "Skoda",
  "Volkswagen",
  "Ford",
  "Chevrolet",
  "Renault",
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white overflow-hidden min-h-[calc(100vh-112px)] flex items-center py-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={heroBgImg}
            alt="Shree Maruti Auto World Premium Workshop Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-radial-to-t from-neutral-950 via-neutral-900/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <FadeRight>
              <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md inline-block">
                Shree Maruti Auto World Rajkot
              </span>
            </FadeRight>
            
            <FadeRight delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Your Trusted <span className="text-red-500">Multi-Brand</span> <br />
                Car Service Partner
              </h1>
            </FadeRight>

            <FadeRight delay={0.2}>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
                Get dealer-level car service, diagnostic troubleshooting, precision body repair, and premium detailing at honest, transparent rates. Located in the heart of Rajkot.
              </p>
            </FadeRight>

            <FadeRight delay={0.3} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/book-appointment"
                className="bg-red-650 hover:bg-red-700 text-white text-center font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Schedule Service
              </Link>
              <Link
                href="/services"
                className="bg-neutral-800/80 hover:bg-neutral-800 text-white text-center font-semibold px-8 py-4 rounded-xl border border-neutral-700 backdrop-blur-xs transition-all duration-300"
              >
                Explore Services
              </Link>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <FadeUp>
            <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
              Uncompromising Standards for <span className="whitespace-nowrap">Every Car</span>
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We leverage modern technology, certified mechanics, and transparent processes to deliver top-tier repairs.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Multi-Brand Expertise",
              description: "Trained mechanics specializing in Asian, European, and American passenger cars.",
              icon: Wrench,
            },
            {
              title: "Transparent Billing",
              description: "Full upfront estimates before work begins. No hidden charges or surprise repairs.",
              icon: ThumbsUp,
            },
            {
              title: "State-of-the-Art Diagnostics",
              description: "Latest electronic OBD scanning tools to spot errors immediately and precisely.",
              icon: Award,
            },
            {
              title: "Genuine Spares",
              description: "We use only genuine OEM/OES components, backed by official warranty claims.",
              icon: Shield,
            },
          ].map((item, idx) => (
            <StaggerItem key={idx}>
              <HoverLift className="bg-white border border-neutral-100 rounded-2xl p-6 text-center space-y-4 shadow-sm hover:border-red-500/20 transition-all">
                <div className="mx-auto w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Our Services Section */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <FadeLeft className="space-y-4 max-w-xl">
              <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Our Service Suite</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
                All Under One Roof
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                From periodic maintenance to advanced mechanical repairs, AC service, denting-painting, and luxury detailing.
              </p>
            </FadeLeft>
            <FadeRight>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:text-red-700 transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeRight>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesPreview.map((svc, idx) => (
              <StaggerItem key={idx}>
                <HoverLift className="bg-white rounded-2xl overflow-hidden shadow-xs border border-neutral-100 flex flex-col h-full">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                        <svc.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900">{svc.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                      {svc.description}
                    </p>
                    <Link
                      href="/services"
                      className="text-red-600 text-sm font-semibold hover:underline inline-flex items-center gap-1.5 pt-2"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Brands We Service Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp className="max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Multi-Brand Workshop</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            We Service All Major Makes & Models
          </h2>
          <p className="text-sm text-neutral-500">
            Equipped with diagnostic software and specifications for every major domestic and import brand.
          </p>
        </FadeUp>

        <Scale>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-100 rounded-xl py-5 px-4 shadow-2xs hover:shadow-xs hover:border-red-500/20 transition-all flex items-center justify-center"
              >
                <span className="text-sm font-bold text-neutral-700 tracking-tight">{brand}</span>
              </div>
            ))}
          </div>
        </Scale>
      </section>

      {/* How Our Process Works */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <FadeUp>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Our Service Flow</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
                Four Steps to Car Perfection
              </h2>
              <p className="text-sm text-neutral-400">
                Simple, transparent, and built entirely around your comfort.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Book Service", desc: "Schedule online or call our service desk in Rajkot." },
              { step: "02", title: "Smart Diagnostic", desc: "We scan the car and send an upfront estimate quote." },
              { step: "03", title: "Quality Repair", desc: "Our certified technicians execute repairs using OEM parts." },
              { step: "04", title: "Road Test & Deliver", desc: "After strict checks, we deliver your clean, repaired car." },
            ].map((step, idx) => (
              <StaggerItem key={idx} className="relative">
                <div className="space-y-4">
                  <span className="text-4xl font-black text-red-650 block opacity-80">{step.step}</span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <FadeUp>
            <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Find answers to the most common queries about Shree Maruti Auto World.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-neutral-100 rounded-2xl overflow-hidden shadow-2xs bg-white"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50/50 transition-colors focus:outline-hidden"
              >
                <span className="font-bold text-neutral-800 text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-2 text-sm text-neutral-500 leading-relaxed border-t border-neutral-50 bg-neutral-50/20">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </FadeUp>
      </section>

      {/* Book Appointment CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-600 rounded-3xl overflow-hidden py-16 px-8 sm:px-12 lg:px-16 text-center text-white relative shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.4),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-neutral-100 text-sm leading-relaxed mt-2 max-w-lg mx-auto">
                Don't wait for engine troubles to compound. Schedule a checkup or detailing slot with Shree Maruti Auto World today.
              </p>
              <div className="flex justify-center pt-4">
                <Link
                  href="/book-appointment"
                  className="bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-md hover:bg-neutral-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book Appointment Now
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch pb-16 md:pb-24">
        <FadeLeft className="space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Connect With Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-2">
              Visit Shree Maruti Auto World
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We are conveniently located on Telephone Exchange Road in Rajkot. Stop by or contact our helpline for towing support.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-950">Call Helpline</h4>
                <a href="tel:+917069290692" className="text-neutral-500 hover:text-red-600 transition-colors">
                  +91 70692 90692
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-950">Email Address</h4>
                <a href="mailto:shreemarutiautoworld@gmail.com" className="text-neutral-500 hover:text-red-600 transition-colors">
                  shreemarutiautoworld@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-950">Address</h4>
                <a
                  href="https://maps.app.goo.gl/7D9AqH6aowd7ccHG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-red-650 transition-colors leading-relaxed block"
                >
                  Hari Nagar - 4/6 Corner, Near Shivalay Apartment, Opp. Tulsi Baug Garden, Near 150 ft. Ring Road, Raiya Telecome Exchange Road, Rajkot - 360007
                </a>
              </div>
            </div>
          </div>
        </FadeLeft>

        <FadeRight className="relative min-h-[300px] rounded-3xl overflow-hidden border border-neutral-100 shadow-sm">
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
        </FadeRight>
      </section>
    </div>
  );
}
