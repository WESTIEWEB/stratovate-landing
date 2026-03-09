"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-screen flex items-center">
      {/* Decorative Background & Ambient Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse-subtle" />
        <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[120px] animate-float" />
        
        {/* Ambient Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}

        {/* Floating Geometric Outlines */}
        <motion.div 
          style={{ y: y1, rotate }}
          className="absolute top-[20%] left-[10%] w-24 h-24 border border-primary/10 rounded-2xl hidden lg:block"
        />
        <motion.div 
          style={{ y: y2, rotate: -rotate }}
          className="absolute bottom-[30%] right-[15%] w-32 h-32 border border-blue-400/10 rounded-full hidden lg:block"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 mb-8 text-xs font-black tracking-[0.2em] uppercase text-primary bg-primary/5 border border-primary/10 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Leading Global Innovation</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-josefin font-bold leading-[0.95] tracking-tighter mb-10">
              Clarity. <br />
              Capability. <br />
              <span className="text-gradient">Confidence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium italic border-l-4 border-primary/20 pl-6">
              Stratovate Technologies empowers organizations to navigate complexity with high-fidelity strategy and intelligent solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link 
                href="/contact" 
                className="group relative bg-primary text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95 flex items-center w-full sm:w-auto justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Book a Consultation 
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="#services" 
                className="flex items-center space-x-3 text-lg font-bold text-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                </div>
                <span>Our Expertise</span>
              </Link>
            </div>

            {/* Trusted By / Mini Stats */}
            <div className="mt-20 flex items-center space-x-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center space-x-2"><Globe className="w-5 h-5" /><span className="text-xs font-bold uppercase tracking-widest">Global Reach</span></div>
              <div className="flex items-center space-x-2"><Shield className="w-5 h-5" /><span className="text-xs font-bold uppercase tracking-widest">Enterprise Ready</span></div>
              <div className="flex items-center space-x-2"><Zap className="w-5 h-5" /><span className="text-xs font-bold uppercase tracking-widest">High Performance</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main Focal Asset */}
            <div className="relative z-10 premium-shadow rounded-[4rem] overflow-hidden bg-white/50 backdrop-blur-sm border border-white/40">
              <Image 
                src="/hero-graphic.png" 
                alt="Premium Innovation" 
                width={1000} 
                height={1000} 
                className="w-full h-auto object-cover opacity-90 mix-blend-multiply hover:scale-105 transition-transform duration-1000"
                priority
              />
            </div>
            
            {/* Dynamic Glass Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -top-12 -right-12 glass p-8 rounded-[2rem] max-w-[280px] z-20 border-white/60"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Status: Active</p>
                </div>
                <div className="text-[10px] font-bold opacity-40">Insight v2.4</div>
              </div>
              
              <h4 className="text-lg font-josefin font-bold mb-4">Operational Clarity Achieved</h4>
              
              <div className="space-y-3">
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-60">
                  <span>Efficiency Index</span>
                  <span>+24.8%</span>
                </div>
              </div>
            </motion.div>

            {/* Second Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

