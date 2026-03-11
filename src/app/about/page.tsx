"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CoreValues } from "@/components/sections/CoreValues";
import { MissionVision } from "@/components/sections/MissionVision";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CoreValues />
        <MissionVision />
      </main>
      <Footer />
    </>
  );
}
