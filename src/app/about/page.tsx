"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

// Shared Navbar/Footer components should be in components/ folder for reuse.
// For now, I'll just create the content for the about page.

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section of About */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-josefin font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-muted-foreground leading-relaxed italic">
            Stratovate Technologies is a modern, solutions-driven company focused on helping businesses and professionals thrive in a digital-first world.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-josefin font-bold">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our work is built around three essentials: <strong>capability, clarity, and execution.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide premium support through carefully designed training, insight-led consulting, and intelligent solutions that address real business needs with precision and purpose. 
              Rather than offering complexity for its own sake, we focus on what is useful, practical, and capable of delivering meaningful results.
            </p>
          </div>
          <div className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/20 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
             <h3 className="text-2xl font-josefin font-bold mb-6 italic">A focus on meaningful results.</h3>
             <p className="text-muted-foreground leading-relaxed">
               Whether you are looking to strengthen your team, improve operational direction, or adopt smarter ways of working, 
               Stratovate Technologies delivers solutions aligned with growth, performance, and long-term value.
             </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-muted px-8 py-16 md:p-24 rounded-3xl mb-24">
          <h2 className="text-3xl font-josefin font-bold mb-12 text-center">Our Core Essentials</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mx-auto mb-6">
                <span className="text-2xl font-bold font-josefin">01</span>
              </div>
              <h4 className="text-xl font-bold">Capability</h4>
              <p className="text-muted-foreground">Strengthening skills and empowering teams for modern performance.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mx-auto mb-6">
                <span className="text-2xl font-bold font-josefin">02</span>
              </div>
              <h4 className="text-xl font-bold">Clarity</h4>
              <p className="text-muted-foreground">Reducing complexity and making smarter business & technology decisions.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mx-auto mb-6">
                <span className="text-2xl font-bold font-josefin">03</span>
              </div>
              <h4 className="text-xl font-bold">Execution</h4>
              <p className="text-muted-foreground">Focusing on practical application and immediately useful knowledge.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-josefin font-bold mb-8 italic">Ready to strengthen your capability?</h3>
          <Link href="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            Get Started With Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
