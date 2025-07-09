"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-600 via-gray-800 to-gray-900 text-transparent bg-clip-text">
          WealthWise
        </h1>
        <p className="mt-4 text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
          AI-powered financial management platform to track, analyze, and optimize your wealth—effortlessly and intelligently.
        </p>

        <div className="flex justify-center mt-10 space-x-6">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-xl"
            >
              Start Managing
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl"
            >
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-16 transition-all duration-300 ease-in-out">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-3xl shadow-2xl border-4 border-gray-200 mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
