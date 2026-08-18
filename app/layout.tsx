import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shree Maruti Auto World | Premium Multi-Brand Car Workshop Rajkot",
  description: "Rajkot's leading premium multi-brand car workshop. Offering expert mechanical repairs, car AC services, 3D wheel alignment, cashless accident claims, denting-painting, ceramic coating, and TPU PPF installations.",
  keywords: [
    "Shree Maruti Auto World",
    "Car Workshop Rajkot",
    "Multi-brand car service Rajkot",
    "Car Repair Rajkot",
    "Car Detailing Rajkot",
    "Ceramic Coating Rajkot",
    "Dent Repair Rajkot",
    "Car AC service Rajkot",
    "Wheel Alignment Rajkot",
    "Cashless accident repairs Rajkot"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-800 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
