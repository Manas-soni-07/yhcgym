import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import BrandIntro from "@/components/home/BrandIntro";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import TrainersSection from "@/components/home/TrainersSection";
import MembershipSection from "@/components/home/MembershipSection";
import Transformation from "@/components/home/Transformation";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import FreeTrialCTA from "@/components/home/FreeTrialCTA";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Editorial Numbers & Stats */}
      <Stats />

      {/* 3. Brand Introduction */}
      <BrandIntro />

      {/* 4. About YHC */}
      <AboutSection />

      {/* 5. Programs Bento Grid */}
      <ProgramsSection />

      {/* 6. Elite Trainers */}
      <TrainersSection />

      {/* 7. Membership Tiers */}
      <MembershipSection />

      {/* 8. Before & After Transformation Slider */}
      <Transformation />

      {/* 9. Verified Testimonials */}
      <Testimonials />

      {/* 10. Masonry Gallery Preview */}
      <GalleryPreview />

      {/* 11. Free Trial High-Impact Banner */}
      <FreeTrialCTA />

      {/* 12. Frequently Asked Questions */}
      <FAQ />

      {/* 13. Location & Contact Form */}
      <ContactSection />
    </div>
  );
}
