"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import type { FourwindsData, SlideData } from "@/lib/fourwinds-data";
import Image from "next/image";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

interface FourwindsBrochureProps {
  data: FourwindsData;
}

const FourwindsBrochure = ({ data }: FourwindsBrochureProps) => {
  // Fade-in animation hook
  const useFadeIn = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
  };

  // Animated section wrapper
  const AnimatedSection = ({
    children,
    className = "",
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) => {
    const { ref, isVisible } = useFadeIn();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  };

  // Slideshow Component
  const Slideshow = ({
    slides,
    heightClass = "h-[400px] md:h-[500px] lg:h-[600px]",
    showDots = true,
    showArrows = true,
    autoPlay = true,
    interval = 5000,
  }: {
    slides: SlideData[];
    heightClass?: string;
    showDots?: boolean;
    showArrows?: boolean;
    autoPlay?: boolean;
    interval?: number;
  }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const goToNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const goToPrev = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // Auto-play
    useEffect(() => {
      if (!autoPlay) return;
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, goToNext]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      const distance = touchStart - touchEnd;
      const minSwipeDistance = 50;
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    return (
      <div
        className={`relative ${heightClass} w-full overflow-hidden`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`relative flex-shrink-0 w-full h-full ${slide.bgClass}`}
            >
              {slide.src && (
                <Image
                  src={slide.src}
                  alt={slide.text}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
              {/* <span className="absolute bottom-6 left-6 z-10 px-4 text-white text-sm md:text-base tracking-widest uppercase font-sans drop-shadow-lg">
                {slide.text}
              </span> */}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 touch-manipulation"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[#0B1420]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 touch-manipulation"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-[#0B1420]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {showDots && (
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  idx === currentIndex
                    ? "bg-[#C9A962] scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Slide counter */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/50 backdrop-blur-sm text-white text-xs md:text-sm px-3 py-1.5 rounded-full z-10">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>
    );
  };

  // Placeholder image component - LARGER sizes
  const PlaceholderImage = ({
    heightClass = "h-[300px] md:h-[450px] lg:h-[550px]",
    bgClass = "bg-slate-200",
    text = "Image",
    textClass = "text-slate-500",
  }: {
    heightClass?: string;
    bgClass?: string;
    text?: string;
    textClass?: string;
  }) => (
    <div
      className={`${heightClass} ${bgClass} ${textClass} flex items-center justify-center w-full shadow-inner border border-black/5 text-center text-xs md:text-sm tracking-widest uppercase font-sans relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
      <span className="relative z-10 px-4">{text}</span>
    </div>
  );

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] font-sans text-base md:text-lg lg:text-xl leading-relaxed overflow-x-hidden">
      {/* ==================== COVER SECTION ==================== */}
      <section className="bg-gradient-to-br from-[#0B1420] via-[#0A1628] to-[#0D1B2A] text-white px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Ambient lighting overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,169,98,0.1)_0%,transparent_60%)] pointer-events-none" />

        <AnimatedSection>
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center mb-8 md:mb-12 lg:mb-16 text-4xl md:text-5xl lg:text-6xl relative mx-auto">
            <Image
              src="/images/img/club-logo.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.1em] md:tracking-[0.15em] mb-4 md:mb-6 uppercase">
            {data.cover.clubName}
            <span className="block text-[0.4em] md:text-[0.45em] mt-2 md:mt-4 font-light tracking-[0.2em] md:tracking-[0.3em] text-white/90">
              {data.cover.clubSubtitle}
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent my-8 md:my-12 mx-auto" />
        </AnimatedSection>

        <AnimatedSection delay={0.45}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#C9A962] tracking-[0.15em] md:tracking-[0.25em] mb-8 md:mb-12 font-normal uppercase font-sans">
            {data.cover.tagline}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 lg:mb-20 font-light opacity-85 tracking-wide">
            {data.cover.description}
          </p>
        </AnimatedSection>
      </section>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative flex items-center justify-center h-[70vh] md:h-[80vh] lg:h-[85vh] min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/img/hero-image.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Cinematic vignette overlay */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

        {/* Content */}
        <AnimatedSection className="relative z-[3] max-w-4xl px-5 md:px-8 text-center -translate-y-29 md:-translate-y-37 lg:-translate-y-45">
          <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight drop-shadow-lg mb-4 md:mb-6">
            {data.hero.headline}
          </h2>

          <p className="text-white sm:text-lg md:text-xl lg:text-2xl text-[#C9A962] tracking-[0.1em] md:tracking-[0.15em] drop-shadow-lg font-normal uppercase">
            {data.hero.subheadline}
          </p>
        </AnimatedSection>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <AnimatedSection className="w-full lg:w-1/2 lg:max-w-xl">
              <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-3 tracking-tight">
                {data.intro.title}
              </h2>
              <h3 className="font-serif text-[#162438] text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8 lg:mb-10 font-light">
                {data.intro.subtitle}
              </h3>
              <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#C9A962] to-transparent mb-8 md:mb-10 lg:mb-12" />

              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#1A1A1A] mb-5 md:mb-6 leading-snug tracking-tight">
                {data.intro.leadParagraph}
              </p>
              <p className="mb-5 md:mb-6 text-[#3D3D3D]">
                {data.intro.description1}
              </p>
              <p className="mb-8 md:mb-10 lg:mb-12 text-[#3D3D3D]">
                {data.intro.description2}
              </p>

              <ul className="list-none p-0 m-0 bg-white py-6 px-5 md:py-8 md:px-8 lg:py-10 lg:px-10 border-l-[3px] border-[#C9A962] shadow-lg">
                {data.intro.features.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center text-base md:text-lg lg:text-xl font-medium text-[#1A1A1A] ${idx < data.intro.features.length - 1 ? "mb-4 md:mb-5" : ""}`}
                  >
                    <span className="text-[#A68B3D] text-xs mr-4 md:mr-5 flex-shrink-0">
                      ◆
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection
              delay={0.15}
              className="w-full lg:w-1/2 order-first lg:order-last"
            >
              <Image
                src="/images/img/intro-section.PNG"
                alt="Intro section image"
                width={1000}
                height={750}
                className="w-full h-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px] object-cover bg-[#F4F7F8]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== NAUTICAL ELEGANCE SECTION ==================== */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 text-[#0B1420]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <AnimatedSection className="w-full lg:w-1/2 lg:max-w-xl">
              <p className="text-xs md:text-sm text-[#C9A962] tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-5 uppercase font-medium">
                {data.nauticalElegance.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 md:mb-10 lg:mb-12 tracking-tight">
                {data.nauticalElegance.title}
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-10 lg:mb-12">
                {data.nauticalElegance.description}
              </p>

              <ul className="list-none p-0 m-0 space-y-4 md:space-y-5 lg:space-y-6">
                {data.nauticalElegance.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-base md:text-lg lg:text-xl leading-relaxed"
                  >
                    <span className="text-[#C9A962] text-lg md:text-xl mr-4 md:mr-5 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="w-full lg:w-1/2">
              <Image
                src="/images/img/elegance-section.PNG"
                alt="Nautical elegance"
                width={1000}
                height={700}
                className="w-full h-[350px] md:h-[500px] lg:h-[650px] xl:h-[700px] object-cover bg-[#1E3A5F]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== FULL WIDTH IMAGE 1 ==================== */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[350px] md:min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/img/tranquility.PNG"
            alt="Tranquil waters"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(10,26,42,0.4)] to-[rgba(10,26,42,0.7)] flex items-center justify-center">
          <AnimatedSection className="text-center px-5 md:px-8">
            <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide drop-shadow-lg">
              {data.fullWidthImages.tranquilWaters.overlayText}
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== AMENITIES SECTION ==================== */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <AnimatedSection className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
            <p className="text-xs md:text-sm text-[#A68B3D] tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-5 uppercase font-medium">
              {data.amenities.label}
            </p>
            <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8 tracking-tight">
              {data.amenities.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#3D3D3D]">
              {data.amenities.description}
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-6 md:p-10 lg:p-14 xl:p-16 border border-black/5 shadow-xl mb-12 md:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-4 md:gap-y-5">
              {data.amenities.list.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-base md:text-lg lg:text-xl font-medium text-[#1A1A1A]"
                >
                  <div className="w-2 h-2 bg-[#C9A962] mr-4 md:mr-5 flex-shrink-0" />{" "}
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {data.amenities.images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.text}
                width={800}
                height={450}
                className={`w-full h-[280px] md:h-[350px] lg:h-[450px] object-cover ${img.bgClass}`}
              />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== FULL WIDTH IMAGE 2 ==================== */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[350px] md:min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/img/old-people.png"
            alt={data.fullWidthImages.openSkies.imageText}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(10,26,42,0.4)] to-[rgba(10,26,42,0.7)] flex items-center justify-center px-5 md:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide drop-shadow-lg text-balance">
              {data.fullWidthImages.openSkies.overlayText}
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== EXECUTIVE OVERVIEW SECTION ==================== */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-[#F5F4F2]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <AnimatedSection className="w-full lg:w-1/2 lg:max-w-xl">
              <p className="text-xs md:text-sm text-[#A68B3D] tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-5 uppercase font-medium">
                {data.executiveOverview.label}
              </p>
              <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-5 tracking-tight">
                {data.executiveOverview.title}
              </h2>
              <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#C9A962] to-transparent mb-8 md:mb-10 lg:mb-12" />

              <p className="text-xl md:text-2xl lg:text-3xl text-[#0B1420] font-medium mb-6 md:mb-8 lg:mb-10 leading-snug tracking-tight">
                {data.executiveOverview.headline}
              </p>

              <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-12 mb-6 md:mb-8 border-t-[3px] border-[#0B1420] shadow-lg">
                <p className="text-base md:text-lg lg:text-xl text-[#1A1A1A] mb-4 md:mb-5 font-semibold">
                  {data.executiveOverview.corporateMembershipIntro}
                </p>
                <ul className="text-[#3D3D3D] text-base md:text-lg lg:text-xl leading-loose pl-5 space-y-1 list-disc">
                  {data.executiveOverview.corporateMembershipPoints.map(
                    (point, idx) => (
                      <li key={idx}>{point}</li>
                    ),
                  )}
                </ul>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-[#3D3D3D]">
                {data.executiveOverview.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="w-full lg:w-1/2">
              <Image
                src="/images/img/executive.PNG"
                alt={data.executiveOverview.imageText}
                width={1000}
                height={750}
                className="w-full h-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px] object-cover bg-[#CFD8DC]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== MEMBERSHIP SECTION ==================== */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Membership Structure Header with Side Image */}
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center mb-12 md:mb-16 lg:mb-20">
            <AnimatedSection className="w-full lg:w-1/2">
              <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-3 tracking-tight">
                {data.membership.title}
              </h2>
              <h3 className="font-serif text-[#A68B3D] text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 md:mb-8 font-light">
                {data.membership.subtitle}
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-[#3D3D3D] mb-8 lg:mb-0">
                {data.membership.description}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="w-full lg:w-1/2">
              <Image
                src="/images/img/membership.PNG"
                alt={data.membership.headerImageText}
                width={1000}
                height={450}
                className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover bg-[#E8E4DF]"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            {data.membership.types.map((membership, idx) => (
              <div
                key={idx}
                className="bg-white border border-black/5 border-t-[3px] border-t-[#C9A962] p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <h4 className="font-serif text-base md:text-lg lg:text-xl mb-4 md:mb-5 tracking-[0.08em] text-[#0B1420]">
                  {membership.title}
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-[#3D3D3D]">
                  {membership.desc}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
            <div className="bg-gradient-to-br from-[#0B1420] to-[#0D1B2A] text-white p-8 md:p-10 lg:p-12 xl:p-14 shadow-2xl">
              <h4 className="font-serif text-[#C9A962] text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 lg:mb-10 tracking-tight">
                {data.membership.useCases.title}
              </h4>
              <ul className="list-none p-0 m-0 space-y-4 md:space-y-5 lg:space-y-6">
                {data.membership.useCases.items.map((useCase, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-base md:text-lg lg:text-xl leading-relaxed"
                  >
                    <span className="text-[#F4F7F8] mr-4 md:mr-5 text-lg md:text-xl mt-0.5 opacity-80 flex-shrink-0">
                      →
                    </span>
                    <span className="opacity-90">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-black/5 p-8 md:p-10 lg:p-12 xl:p-14 shadow-lg">
              <h4 className="font-serif text-[#0B1420] text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 lg:mb-10 tracking-tight">
                {data.membership.valueProposition.title}
              </h4>
              <ul className="list-none p-0 m-0 space-y-4 md:space-y-5 lg:space-y-6">
                {data.membership.valueProposition.items.map((prop, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-base md:text-lg lg:text-xl font-medium text-[#1A1A1A]"
                  >
                    <span className="text-[#A68B3D] text-lg md:text-xl mr-4 md:mr-5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* <AnimatedSection>
            <PlaceholderImage
              heightClass="h-[350px] md:h-[450px] lg:h-[550px]"
              bgClass="bg-[#162438]"
              textClass="text-white"
              text={data.membership.footerImageText}
            />
          </AnimatedSection> */}
        </div>
      </section>

      {/* ==================== LOCATION / GRACEFIELD SECTION ==================== */}
      <section className="py-16 md:py-24 lg:py-32 xl:py-40 bg-[#F5F4F2]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            <AnimatedSection className="w-full lg:w-1/2 lg:max-w-xl">
              <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-3 tracking-tight">
                {data.location.title}
              </h2>
              <h3 className="font-serif text-[#162438] text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 md:mb-10 lg:mb-12 font-light">
                {data.location.subtitle}
              </h3>

              <h4 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0B1420] mb-2 md:mb-3 tracking-tight">
                {data.location.headline}
              </h4>
              <p className="text-base md:text-lg lg:text-xl text-[#A68B3D] font-medium mb-6 md:mb-8 lg:mb-10 uppercase tracking-[0.1em] md:tracking-[0.15em]">
                {data.location.tagline}
              </p>

              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-12 text-[#3D3D3D]">
                {data.location.description}
              </p>

              <ul className="list-none p-0 m-0 space-y-4 md:space-y-5 lg:space-y-6">
                {data.location.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-base md:text-lg lg:text-xl text-[#1A1A1A] leading-relaxed font-medium"
                  >
                    <span className="text-[#A68B3D] mr-4 md:mr-5 text-xs mt-2 flex-shrink-0">
                      ◆
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection
              delay={0.15}
              className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 lg:gap-8"
            >
              <Image
                src={data.location.images.main.src}
                alt={data.location.images.main.text}
                width={1000}
                height={400}
                className={`w-full h-[280px] md:h-[350px] lg:h-[400px] object-cover ${data.location.images.main.bgClass}`}
              />
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {data.location.images.secondary.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={img.text}
                    width={600}
                    height={280}
                    className={`w-full h-[180px] md:h-[220px] lg:h-[280px] object-cover ${img.bgClass}`}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== LIFESTYLE IMAGES SLIDESHOW ==================== */}
      <AnimatedSection>
        <Slideshow
          heightClass="h-[450px] md:h-[550px] lg:h-[700px]"
          slides={data.lifestyleSlides}
          autoPlay
          interval={5000}
        />
      </AnimatedSection>

      {/* ==================== FOURWINDS EXTERIOR GALLERY SLIDESHOW - FULL WIDTH ==================== */}
      <section>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          <AnimatedSection>
            <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-5 tracking-tight">
              {data.exteriorSection.title}
            </h2>
            <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-[#C9A962] to-transparent" />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <Slideshow
            heightClass="h-[450px] md:h-[550px] lg:h-[700px] xl:h-[800px]"
            slides={data.exteriorSection.slides}
            autoPlay={true}
            interval={5000}
          />
        </AnimatedSection>
      </section>

      {/* ==================== FOURWINDS INTERIORS GALLERY - FULL WIDTH SLIDESHOW ==================== */}
      <section className="bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
          <AnimatedSection>
            <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-5 tracking-tight">
              {data.interiorsSection.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#3D3D3D] font-light">
              {data.interiorsSection.subtitle}
            </p>
            <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-[#C9A962] to-transparent mt-6 md:mt-8" />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <Slideshow
            heightClass="h-[450px] md:h-[550px] lg:h-[700px] xl:h-[800px]"
            slides={data.interiorsSection.slides}
            autoPlay={true}
            interval={5000}
          />
        </AnimatedSection>
      </section>

      {/* ==================== THE EXPERIENCE ==================== */}
      <section className="flex flex-col lg:flex-row">
        <div className="order-2 lg:order-1 w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-auto lg:min-h-[600px]">
          <Image
            src="/images/img/experience.PNG"
            alt={data.experience.sideImageText}
            width={1000}
            height={800}
            className="w-full h-full min-h-[350px] lg:min-h-[600px] object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/2 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 flex flex-col justify-center bg-white">
          <AnimatedSection>
            <p className="text-xs md:text-sm text-[#A68B3D] tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-5 font-medium uppercase">
              {data.experience.label}
            </p>
            <h2 className="font-serif text-[#0B1420] text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 md:mb-10 lg:mb-12 tracking-tight">
              {data.experience.title}
            </h2>

            <p className="text-xl md:text-2xl lg:text-3xl text-[#0B1420] mb-8 md:mb-10 lg:mb-12 italic leading-snug font-medium tracking-tight">
              {data.experience.quote}
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-10 md:mb-12 lg:mb-14 text-[#3D3D3D]">
              {data.experience.description}
            </p>
            <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-[#C9A962] to-transparent" />
          </AnimatedSection>
        </div>
      </section>
      <BookingForm />

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </div>
  );
};

export default FourwindsBrochure;
