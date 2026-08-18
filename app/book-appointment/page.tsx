"use client";

import React from "react";
import { Phone, CalendarCheck, ShieldAlert } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import { FadeUp, FadeLeft, FadeRight } from "@/components/MotionWrapper";

export default function BookAppointment() {
  return (
    <div className="space-y-16 py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <FadeUp>
          <span className="text-xs font-bold text-red-650 uppercase tracking-widest">Scheduler</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl mt-2">
            Book an Appointment
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Provide your vehicle info and pick a slot. Our service team will verify availability and confirm within 15 minutes.
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        {/* Info Column */}
        <FadeLeft className="lg:col-span-1 space-y-6">
          {/* Working hours reminder */}
          <div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
              <CalendarCheck className="w-4 h-4 text-red-600" />
              Scheduling Slots
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We process appointment requests in real-time. Book at least 1 day in advance.
            </p>
            <div className="text-xs space-y-1 border-t border-neutral-100 pt-3">
              <p className="text-neutral-700 font-semibold">Available Hours:</p>
              <p className="text-neutral-500">Mon - Sat: 09:00 AM - 08:00 PM</p>
              <p className="text-neutral-400">Sunday: Closed</p>
            </div>
          </div>

          {/* Emergency Towing Box */}
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-red-750 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-650" />
              Need Immediate Towing?
            </h3>
            <p className="text-xs text-red-700 leading-relaxed">
              Do not use this form if your car is broken down on the road. Call us directly for immediate Rajkot flatbed pick-up:
            </p>
            <a
              href="tel:+917069290692"
              className="inline-flex items-center gap-2 font-bold text-xs text-red-650 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> +91 70692 90692
            </a>
          </div>
        </FadeLeft>

        {/* Appointment Wizard Form */}
        <FadeRight className="lg:col-span-3">
          <AppointmentForm />
        </FadeRight>
      </div>
    </div>
  );
}
