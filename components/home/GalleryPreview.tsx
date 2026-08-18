"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { galleryData, GalleryItem } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Take first 6 photos for preview with varied heights
  const previewItems = galleryData.slice(0, 6);

  return (
    <>
      <section className="section-padding bg-[#F7F3E8]">
        <div className="container-luxury">
          <SectionHeading
            align="split"
            eyebrow="CLUB SPACES"
            title="THE SANCTUARY."
            subtitle="Explore our bespoke training grounds, Finnish cedar saunas, and rainfall recovery suites."
            action={
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#171717] hover:text-[#77736A] transition-colors"
              >
                <span>VIEW FULL GALLERY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          {/* Masonry-Style Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div
                  data-cursor="view"
                  onClick={() => setSelectedItem(item)}
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

                  {/* Hover Info Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="self-start text-[10px] font-mono text-[#E8C766] uppercase tracking-widest bg-[#171717]/80 px-2.5 py-1 rounded-[2px] border border-[#E8C766]/30">
                      {item.categoryLabel}
                    </span>

                    <div className="text-[#FFFDF7]">
                      <h3 className="font-display text-lg uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#E8C766] uppercase tracking-wider mt-1 font-semibold">
                        <span>VIEW PHOTO</span>
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
        item={selectedItem}
        items={previewItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </>
  );
}
