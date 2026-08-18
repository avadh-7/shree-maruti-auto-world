"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    
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

    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 border border-red-100 rounded-3xl p-8 text-center space-y-4 shadow-xs"
      >
        <div className="mx-auto w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">Message Sent Successfully!</h3>
        <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out to Shree Maruti Auto World. Our representative will contact you shortly to address your inquiry.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-red-600 font-semibold text-sm hover:underline mt-2 inline-block focus:outline-hidden"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
              errors.name ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
            }`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
              errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
              errors.email ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Inquiry about Ceramic Coating"
            className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
              errors.subject ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
            }`}
          />
          {errors.subject && <p className="text-xs text-red-500 mt-1.5">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
          Your Message
          </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Write details of your query..."
          className={`w-full px-4 py-3 rounded-xl border bg-neutral-50 text-neutral-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-600 focus:bg-white transition-all ${
            errors.message ? "border-red-500 ring-1 ring-red-500" : "border-neutral-200"
          }`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
