"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData, GalleryItem } from "@/data/gallery";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";
import { ArrowRight } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "ALL SPACES" },
    { id: "strength", label: "STRENGTH FLOOR" },
    { id: "architecture", label: "ARCHITECTURE & DESIGN" },
    { id: "recovery", label: "RECOVERY & SAUNA" },
    { id: "coaching", label: "PRIVATE SUITES" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((i) => i.category === activeCategory);

  return (
    <InnerPageLayout
      breadcrumb="GALLERY"
      eyebrow="VISUAL ARCHIVE"
      title="THE YHC SANCTUARY."
      subtitle="Take a tour through our 15,000 square foot health club featuring natural oak, Finnish saunas, and custom Swedish steel."
    >
      <section className="section-padding bg-[#FFFDF7]">
        <div className="container-luxury">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#171717] text-[#FFFDF7] border border-[#171717] shadow-sm"
                    : "bg-[#F7F3E8] text-[#77736A] border border-[#D8D2C4] hover:text-[#171717]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <div
                  data-cursor="view"
                  onClick={() => setSelectedImage(item)}
                  className="group relative w-full aspect-[4/3.5] rounded-[6px] overflow-hidden border border-[#D8D2C4] bg-[#171717] cursor-pointer shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#171717]/30 group-hover:bg-[#171717]/60 transition-colors duration-300" />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="self-start text-[10px] font-mono text-[#E8C766] uppercase tracking-widest bg-[#171717]/80 px-2.5 py-1 rounded-[2px] border border-[#E8C766]/30">
                      {item.categoryLabel}
                    </span>

                    <div className="text-[#FFFDF7]">
                      <h3 className="font-display text-lg uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#D8D2C4] line-clamp-1 mt-1">
                        {item.caption}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#E8C766] uppercase tracking-wider mt-2 font-semibold">
                        <span>OPEN FULL VIEW</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedImage}
        items={filteredItems}
        onClose={() => setSelectedImage(null)}
        onSelect={(item) => setSelectedImage(item)}
      />
    </InnerPageLayout>
  );
}
