"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { Services } from "@/components/sections/Services";
import { CoreValues } from "@/components/sections/CoreValues";
import { MissionVision } from "@/components/sections/MissionVision";
import { Resources } from "@/components/sections/Resources";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <IntroSection />
      <CoreValues />
      <Services />
      <MissionVision />
      <Resources />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

