import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  ChevronRight,
  Compass
} from "lucide-react";
import { servicesData } from "../servicesData";

// Statically generate routes for all services at build time
export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const service = servicesData.find((svc) => svc.slug === slug);

  if (!service) {
    notFound();
  }

  // Dynamically resolve the primary icon component
  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Wrench;

  // Select 4 other services for cross-linking in the sidebar
  const otherServices = servicesData
    .filter((svc) => svc.slug !== slug)
    .slice(0, 4);

  return (
    <div className="bg-neutral-50/50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-neutral-500 bg-white px-5 py-3.5 rounded-2xl border border-neutral-100 shadow-2xs w-fit">
          <Link href="/" className="hover:text-red-650 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
          <Link href="/services" className="hover:text-red-650 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-neutral-900 font-bold">{service.title}</span>
        </nav>

        {/* Back Link */}
        <div className="flex items-center">
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-red-650 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Extensive Details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Banner block */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-neutral-100 shadow-sm bg-neutral-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <span className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-2 rounded-md shadow-md">
                {service.category}
              </span>
            </div>

            {/* Service Header Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-650 uppercase tracking-widest">{service.category} Category</span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-0.5">
                    {service.title}
                  </h1>
                </div>
              </div>
              
              <hr className="border-neutral-100 my-4" />
              
              <h2 className="text-lg font-bold text-neutral-950">Service Overview</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {service.inDepthDetails.overview}
              </p>
            </div>

            {/* Key Features / What's Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-6">
              <h3 className="text-lg font-bold text-neutral-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                What's Included in This Service
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.inDepthDetails.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-6">
              <h3 className="text-lg font-bold text-neutral-950 flex items-center gap-2">
                <Compass className="w-5 h-5 text-red-600 shrink-0" />
                Service Benefits & Value
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.inDepthDetails.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 flex items-start gap-3">
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full mt-2 shrink-0 animate-pulse" />
                    <p className="text-sm font-semibold text-neutral-800 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Workshop Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-6">
              <h3 className="text-lg font-bold text-neutral-950">
                Our Work Execution Process
              </h3>
              <div className="relative border-l-2 border-red-100 ml-4 pl-6 space-y-6 my-2">
                {service.inDepthDetails.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Number Pin */}
                    <div className="absolute -left-10 top-0.5 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-xs">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Specific FAQ list */}
            {service.inDepthDetails.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-6">
                <h3 className="text-lg font-bold text-neutral-950 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-red-600 shrink-0" />
                  Frequently Asked Questions
                </h3>
                <div className="divide-y divide-neutral-100">
                  {service.inDepthDetails.faqs.map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group py-4 [&_summary::-webkit-details-marker]:hidden"
                      defaultValue={idx === 0 ? "true" : undefined}
                    >
                      <summary className="flex justify-between items-center font-bold text-neutral-900 cursor-pointer list-none gap-4">
                        <span className="text-sm sm:text-base">{faq.q}</span>
                        <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                          <LucideIcons.ChevronDown className="w-5 h-5 text-neutral-500" />
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Dynamic Sidebar Sticky Panel */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
            
            {/* Appointment Booking Form Card */}
            <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              {/* Highlight backdrop */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-650/15 rounded-full filter blur-xl" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Instant Booking</span>
                  <h3 className="text-xl font-bold mt-1">Book This Service</h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Schedule an appointment for {service.title} at Shree Maruti Auto World. Select your date and time in just a few clicks.
                  </p>
                </div>

                <Link
                  href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
                  className="group flex items-center justify-center gap-2 w-full bg-red-650 hover:bg-red-700 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-xs hover:-translate-y-0.5"
                >
                  Schedule Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Quick Inquiries</h3>
              
              <div className="space-y-3">
                <a
                  href={`tel:+917069290692`}
                  className="flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-neutral-850 text-white font-semibold py-3 rounded-xl text-xs transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4" />
                  Call Support (+91 70692)
                </a>
                
                <a
                  href={`https://wa.me/917069290692?text=Hi%20Maruti%20Auto%20World%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl text-xs transition-colors shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                    <path d="M12.016 2C6.488 2 2 6.488 2 12.016c0 2.112.656 4.08 1.776 5.712L2 22l4.48-1.776A10.027 10.027 0 0 0 12.016 22c5.528 0 10.016-4.488 10.016-10.016S17.544 2 12.016 2zm0 18.032c-1.808 0-3.504-.48-4.96-1.328l-3.504 1.392 1.392-3.504a8.038 8.038 0 0 1-1.328-4.96c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8zm4.368-5.712c-.272-.136-1.616-.8-1.872-.896-.256-.096-.448-.144-.64.144-.192.288-.736.896-.896 1.072-.16.176-.32.192-.592.048-.272-.144-1.152-.424-2.192-1.36-.816-.728-1.36-1.624-1.52-1.896-.16-.272-.016-.416.128-.56.128-.128.272-.32.416-.48.128-.16.176-.272.272-.464.096-.192.048-.352-.016-.496-.064-.144-.64-1.536-.88-2.112-.224-.56-.464-.48-.64-.496-.16-.016-.352-.016-.544-.016s-.496.064-.752.336c-.256.272-.976.96-.976 2.336s1 2.688 1.136 2.864c.144.176 1.952 2.992 4.736 4.192 2.56 1.104 2.56.736 3.024.688.464-.048 1.504-.624 1.712-1.216.208-.592.208-1.104.144-1.216z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
              
              <div className="flex justify-between items-center text-[10px] text-neutral-400 pt-2 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Mon-Sat: 9AM - 8PM
                </span>
                <span>Response in 15 Min</span>
              </div>
            </div>

            {/* Other Services links */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-2xs space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Explore Other Services</h3>
              <div className="divide-y divide-neutral-100">
                {otherServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex justify-between items-center py-3.5 group text-sm text-neutral-600 hover:text-red-650 transition-colors"
                  >
                    <span className="font-semibold">{svc.title}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-red-650 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
