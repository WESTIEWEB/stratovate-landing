"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield, Sparkles, TrendingUp, Users, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Enhanced particle system with more variety
const PARTICLES = [
  ...Array(8).fill(null).map((_, i) => ({
    x: (i * 47 + 17) % 25 - 12.5,
    duration: 4 + i * 1.2,
    delay: i * 0.6,
    top: (i * 19 + 9) % 90 + 5,
    left: (i * 29 + 13) % 90 + 5,
    size: ((i * 7 + 11) % 20) / 10 + 1, // Range: 1.1 - 2.9
    type: 'dot'
  })),
  ...Array(4).fill(null).map((_, i) => ({
    x: (i * 61 + 23) % 30 - 15,
    duration: 6 + i * 1.5,
    delay: i * 1.2 + 2,
    top: (i * 31 + 15) % 80 + 10,
    left: (i * 37 + 19) % 80 + 10,
    size: ((i * 13 + 17) % 30) / 10 + 2, // Range: 2.0 - 4.9
    type: 'sparkle'
  }))
];

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

        {/* Ambient Particles — stable, deterministic positions */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [0, -50, 0],
              x: [0, p.x, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            className={`absolute rounded-full ${p.type === 'sparkle'
              ? 'bg-gradient-to-r from-primary/60 to-blue-400/60 shadow-lg shadow-primary/20'
              : 'bg-primary/40'
              }`}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
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

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-josefin font-bold leading-[0.92] tracking-tighter mb-12">
              Clarity. <br />
              <motion.span
                className="text-gradient bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Capability.
              </motion.span>
              <br />
              <span className="text-foreground/90">Confidence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium italic border-l-4 border-primary/20 pl-6">
              Stratovate Technologies empowers organizations to navigate complexity with high-fidelity strategy and intelligent solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-primary to-blue-600 text-white px-14 py-7 rounded-full font-bold text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50 active:scale-95 flex items-center w-full sm:w-auto justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform inline-block" />
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
            <div className="mt-20 flex items-center justify-center sm:justify-start space-x-10 opacity-50 hover:opacity-100 transition-all duration-500">
              {[
                { icon: Globe, label: "Global Reach", color: "text-blue-600" },
                { icon: Shield, label: "Enterprise Ready", color: "text-green-600" },
                { icon: Zap, label: "High Performance", color: "text-yellow-600" },
                { icon: TrendingUp, label: "Proven Results", color: "text-purple-600" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3 group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm group-hover:shadow-md transition-all duration-300`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</p>
                  </div>
                </motion.div>
              ))}
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

              <h4 className="text-xl font-josefin font-bold mb-6 text-foreground">Operational Clarity Achieved</h4>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-widest opacity-70">
                    <span>Efficiency Index</span>
                    <span className="text-primary">+28.7%</span>
                  </div>
                  <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      transition={{ duration: 2.5, delay: 1.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-widest opacity-70">
                    <span>Client Satisfaction</span>
                    <span className="text-green-600">99.2%</span>
                  </div>
                  <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      transition={{ duration: 2.5, delay: 2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm"
                    />
                  </div>
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