"use client";

import Image from "next/image";
import { useRef } from "react";

export default function MobileServicesCarousel({
  services,
}: {
  services: { title: string; image: string }[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}} />
        {services.map((s, i) => (
          <div
            key={i}
            className="min-w-full flex-shrink-0 snap-center px-4 flex flex-col items-center hide-scrollbar"
          >
            <div className="relative w-full max-w-[340px] aspect-[292/382] rounded-[24px] overflow-hidden mb-6">
              <Image src={s.image} alt={s.title} fill className="object-cover" />
            </div>
            <p className="px-4 text-[#676767] text-[18px] text-center leading-snug font-normal max-w-[280px]">
              {s.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-4">
        <button
          onClick={() => scroll("left")}
          className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#AFAFAF] flex items-center justify-center bg-white text-[#676767] hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-[52px] h-[52px] rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
