"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Private Marina",
    tagline: "MARITIME EXCELLENCE",
    description:
      "A sanctuary for the seafaring soul. Our world-class marina offers bespoke docking solutions and 24/7 concierge support for West Africa's most prestigious vessels.",
    image: "/images/img/01 Great Room View 1.png",
  },
  {
    title: "Private Jetties",
    tagline: "SEAMLESS ACCESS",
    description:
      "Experience the ultimate convenience with direct lagoon access. Our private jetties are designed for effortless arrivals and departures, ensuring you spend more time on the water.",
    image: "/images/img/02 Great Room View 2.png",
  },
  {
    title: "Fine Dining",
    tagline: "CURATED FLAVORS",
    description:
      "Indulge in a world-class culinary journey where local ingredients meet international mastery. Panoramic waterfront views set the stage for unforgettable gastronomic experiences.",
    image: "/images/img/03 Great Room View 3.png",
  },
  {
    title: "Waterfront Living",
    tagline: "ICONIC VIEWS",
    description:
      "Where modern architecture meets the serenity of the Lagos lagoon. Every corner is curated to inspire, offering a lifestyle that is as breathtaking as the horizon.",
    image: "/images/img/04 Great Room View 4.png",
  },
  {
    title: "Helipad Access",
    tagline: "ELEVATED ARRIVALS",
    description:
      "Bypass the city traffic. Arrive directly at the marina via our private helipad, designed exclusively for residents who value time, security, and absolute privacy.",
    image: "/images/img/07 Restaurant View 2.png",
  },
  {
    title: "Executive Lounge",
    tagline: "PREMIUM COMFORT",
    description:
      "A space designed for high-stakes conversations and quiet reflection. Our lounge offers the perfect blend of privacy and luxury overlooking the marina.",
    image: "/images/img/06 Restaurant View 1.png",
  },
  {
    title: "The Clubhouse",
    tagline: "ELITE NETWORKING",
    description:
      "Join a community of visionaries. The exclusive Clubhouse offers premium cigar lounges, private tasting rooms, and an atmosphere of absolute discretion.",
    image: "/images/img/08 Bar Area View 1.png",
  },
];

export default function YachtGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = features.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.8,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["0vw", `-${(totalItems - 1) * 100}vw`],
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${totalItems * 100}vh` }}
      className="relative bg-[#dee3e8]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ x, width: `${totalItems * 100}vw` }}
          className="flex h-full"
        >
          {features.map((feature, index) => (
            <ImageBlock
              key={index}
              index={index}
              total={totalItems}
              progress={smoothProgress}
              feature={feature}
            />
          ))}
        </motion.div>

        {/* CONTENT LAYER */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto h-full relative px-6 md:px-12 lg:px-0">
            {features.map((feature, index) => (
              <ContentBlock
                key={index}
                index={index}
                total={totalItems}
                progress={smoothProgress}
                data={feature}
              />
            ))}
          </div>
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="absolute bottom-12 right-6 md:right-20 z-30 flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-[#4c6c84]/40 tracking-[0.6em] font-bold uppercase">
              Archive
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-[#af8f47] font-extralight italic">
                0{totalItems}
              </span>
              <span className="text-xs text-[#4c6c84]/30">/ VII</span>
            </div>
          </div>
          <div className="w-40 h-[1px] bg-[#4c6c84]/10 relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 bg-[#af8f47] origin-left shadow-[0_0_10px_#af8f47]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageBlock({ index, total, progress, feature }: any) {
  const step = 1 / (total - 1);
  const center = index * step;
  const start = Math.max(0, center - step);
  const end = Math.min(1, center + step);

  const innerX = useTransform(progress, [start, end], ["8%", "-8%"]);
  const scale = useTransform(progress, [start, center, end], [1.15, 1, 1.15]);

  return (
    <div className="relative h-screen w-screen flex-shrink-0 overflow-hidden">
      <motion.div
        style={{ scale, x: innerX }}
        className="absolute inset-0 w-[116%] h-full -left-[8%]"
      >
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover brightness-[0.45]" // ← darker
          priority={index === 0}
        />
      </motion.div>
      {/* Darker overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.45)_0%,transparent_65%)]" />
    </div>
  );
}

function ContentBlock({ index, total, progress, data }: any) {
  const step = 1 / (total - 1);
  const center = index * step;
  const clamp = (v: number) => Math.max(0, Math.min(1, v));

  const fadeRange = step * 0.4;

  const opacity = useTransform(
    progress,
    [
      clamp(center - fadeRange),
      clamp(center - fadeRange * 0.1),
      clamp(center + fadeRange * 0.1),
      clamp(center + fadeRange),
    ],
    [0, 1, 1, 0],
  );

  const titleY = useTransform(
    progress,
    [clamp(center - fadeRange), center],
    [120, 0],
  );

  const descY = useTransform(
    progress,
    [clamp(center - fadeRange * 0.8), center],
    [40, 0],
  );

  const taglineOpacity = useTransform(
    progress,
    [clamp(center - fadeRange), clamp(center - fadeRange * 0.3)],
    [0, 1],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col justify-center pointer-events-none"
    >
      <div className="max-w-4xl">
        <motion.p
          style={{ opacity: taglineOpacity }}
          className="text-[#af8f47] text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-6"
        >
          {data.tagline}
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h2
            style={{ y: titleY }}
            className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tighter leading-[0.9]" // ← white
          >
            {data.title}
          </motion.h2>
        </div>

        <motion.div
          style={{ y: descY }}
          className="border-l-2 border-[#af8f47]/50 pl-8 max-w-xl" // ← pill removed
        >
          <p className="text-white/70 text-sm md:text-lg font-light leading-relaxed tracking-wide">
            {data.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
