import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import CustomCursor from "@/components/ui/CustomCursor";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const displayFont = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YHC � YOUR HEALTH CLUB | Luxury Fitness & Wellness",
  description: "YHC brings together world-class strength coaching, bespoke recovery amenities, and an uncompromising wellness standard. Your Health. Your Strength. Your Club.",
  keywords: ["YHC Gym", "Your Health Club", "Luxury gym", "Strength training", "Personal training", "Private fitness club", "Cold plunge", "Infrared sauna"],
  authors: [{ name: "YHC Health Club" }],
  openGraph: {
    title: "YHC � YOUR HEALTH CLUB",
    description: "Premium health club, expert coaching, state-of-the-art facilities, and a community built around better health.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F7F3E8] text-[#171717] selection:bg-[#E8C766] selection:text-[#171717] antialiased">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppFloating />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
