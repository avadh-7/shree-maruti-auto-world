"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, CheckCircle2, User, Phone, Mail, Car, MessageSquare, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  "General Car Service",
  "Engine Repair",
  "Denting & Painting",
  "Car AC Service",
  "Wheel Alignment",
  "Wheel Balancing",
  "Battery Replacement",
  "Insurance Claim Assistance",
  "Car Washing",
  "Car Detailing",
  "Ceramic Coating",
  "Paint Protection Film (PPF)",
  "Interior Cleaning",
  "Exterior Detailing",
  "Computer Diagnostics",
];

function AppointmentFormInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const svc = searchParams?.get("service");
    if (svc && services.includes(svc)) {
      setForm((prev) => ({ ...prev, service: svc }));
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.brand.trim()) newErrors.brand = "Vehicle Brand is required";
    if (!form.model.trim()) newErrors.model = "Vehicle Model is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s\-+]/g, "").slice(-10))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate booking API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  // Get current date to prevent booking in the past
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neutral-50 border border-neutral-100 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto space-y-6 shadow-sm"
      >
        <div className="mx-auto w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-neutral-900">Appointment Requested!</h3>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
            Your booking request for a <span className="font-semibold text-neutral-800">{form.service}</span> has been received. Our scheduling desk will review and send you a confirmation message on <span className="font-semibold text-neutral-800">{form.phone}</span> shortly.
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-5 text-left text-sm space-y-3 max-w-md mx-auto">
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span className="text-neutral-500">Client Name:</span>
            <span className="font-medium text-neutral-900">{form.name}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span className="text-neutral-500">Vehicle:</span>
            <span className="font-medium text-neutral-900">{form.brand} {form.model}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span className="text-neutral-500">Preferred Date:</span>
            <span className="font-medium text-neutral-900">{form.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Preferred Time:</span>
            <span className="font-medium text-neutral-900">{form.time}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setForm({
              name: "",
              phone: "",
              email: "",
              brand: "",
              model: "",
              service: "",
              date: "",
              time: "",
              message: "",
            });
          }}
          className="bg-neutral-900 hover:bg-neutral-850 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-sm"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-neutral-100 rounded-3xl p-6 sm:p-10 shadow-lg max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-xl font-bold text-neutral-900 mb-1">Book Your Car Service</h2>
        <p className="text-xs text-neutral-500">Fill in the details below and select your preferred date/time slot.</p>
      </div>

      <div className="space-y-6">
        {/* Section 1: Customer Contact */}
        <div>
          <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-neutral-50 pb-2">
            <User className="w-3.5 h-3.5" /> 1. Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.name ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="70692 90692"
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.email ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>
        </div>

        {/* Section 2: Vehicle & Services */}
        <div>
          <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-neutral-50 pb-2">
            <Car className="w-3.5 h-3.5" /> 2. Vehicle & Service Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="brand" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Car Brand / Make</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Hyundai, Maruti Suzuki, Honda"
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.brand ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              />
              {errors.brand && <p className="text-xs text-red-500 mt-1">{errors.brand}</p>}
            </div>

            <div>
              <label htmlFor="model" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Car Model</label>
              <input
                type="text"
                id="model"
                name="model"
                value={form.model}
                onChange={handleChange}
                placeholder="i20, Swift, City"
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.model ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              />
              {errors.model && <p className="text-xs text-red-500 mt-1">{errors.model}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Service Required</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.service ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              >
                <option value="">Select a Service</option>
                {services.map((svc) => (
                  <option key={svc} value={svc}>{svc}</option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
            </div>
          </div>
        </div>

        {/* Section 3: Scheduling */}
        <div>
          <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-neutral-50 pb-2">
            <Calendar className="w-3.5 h-3.5" /> 3. Schedule Preference
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="date" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                min={getTodayDateString()}
                value={form.date}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.date ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              />
              {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="time" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Preferred Time Slot</label>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
                  errors.time ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
                }`}
              >
                <option value="">Select a Time Slot</option>
                <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
              </select>
              {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time}</p>}
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" /> Additional Notes or Concerns (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="E.g., Engine vibration at high speed, AC not cooling, squeaky brakes, etc."
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Request...
          </>
        ) : (
          <>
            <Wrench className="w-4 h-4" />
            Confirm Appointment Request
          </>
        )}
      </button>
    </form>
  );
}

export default function AppointmentForm() {
  return (
    <Suspense fallback={
      <div className="bg-white border border-neutral-100 rounded-3xl p-10 shadow-lg max-w-4xl mx-auto text-center py-20">
        <p className="text-neutral-500 text-sm">Loading appointment form...</p>
      </div>
    }>
      <AppointmentFormInner />
    </Suspense>
  );
}
