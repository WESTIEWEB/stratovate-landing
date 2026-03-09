"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { CoreValues } from "@/components/sections/CoreValues";
import { Resources } from "@/components/sections/Resources";

export default function HomePage() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <CoreValues />
      <Services />
      <Resources />
      <Footer />
    </main>
  );
}

