"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb, Target, Zap, BarChart3, ShieldCheck, Globe, Cpu, Layout, Layers, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Lexlytic",
    description: "Intelligent insight for smarter decisions.",
    highlights: [
      { text: "Supports informed, insight-driven decisions", icon: <BarChart3 className="w-4 h-4 text-primary" /> },
      { text: "Improves visibility and analytical clarity", icon: <ShieldCheck className="w-4 h-4 text-primary" /> },
      { text: "Helps streamline workflow efficiency", icon: <Zap className="w-4 h-4 text-primary" /> },
      { text: "Scalable for evolving business needs", icon: <Globe className="w-4 h-4 text-primary" /> }
    ],
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    cta: "Discover Lexlytic",
    href: "https://www.lexlytic.com/",
    isExternal: true,
    isProduct: true,
    highlight: true,
    bgAsset: "/hero-graphic.png"
  },
  {
    title: "Training",
    description: "Practical learning for modern capability.",
    highlights: [
      { text: "Practical, application-focused learning", icon: <Target className="w-4 h-4 text-primary" /> },
      { text: "Customizable sessions for teams and organizations", icon: <Users className="w-4 h-4 text-primary" /> },
      { text: "Relevant skill development for today’s digital environment", icon: <Cpu className="w-4 h-4 text-primary" /> },
      { text: "Clear outcomes that support performance and growth", icon: <Layout className="w-4 h-4 text-primary" /> }
    ],
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    cta: "Ask About Training",
    href: "/contact",
    bgAsset: "/hero-graphic.png"
  },
  {
    title: "Consulting",
    description: "Strategic guidance for complex challenges.",
    highlights: [
      { text: "Business and technology strategy support", icon: <Layers className="w-4 h-4 text-primary" /> },
      { text: "Operational improvement guidance", icon: <BarChart3 className="w-4 h-4 text-primary" /> },
      { text: "Process refinement and decision support", icon: <Cpu className="w-4 h-4 text-primary" /> },
      { text: "Practical direction for digital transformation initiatives", icon: <Zap className="w-4 h-4 text-primary" /> }
    ],
    icon: <Users className="w-12 h-12 text-primary" />,
    cta: "Request Consulting Support",
    href: "/contact",
    bgAsset: "/hero-graphic.png"
  }
];

export const Services = () => {
  return (
    <section id="services" className="min-h-screen min-h-[100svh] w-full relative overflow-hidden bg-gradient-to-b from-muted/30 to-background flex flex-col justify-center py-12 md:py-16">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <h2 className="text-xs md:text-sm font-black tracking-[0.2em] text-primary uppercase">Our Expertise</h2>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-josefin font-bold mb-4 leading-tight">
              Strategic Solutions for <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-primary/80">Modern Growth</span>
            </h3>
            <div className="h-1 w-24 bg-primary/20 rounded-full mx-auto mt-6" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "group relative p-6 md:p-8 rounded-[2rem] border bg-card/70 dark:bg-card/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden",
                service.highlight
                  ? "border-primary/40 shadow-xl shadow-primary/20 ring-1 ring-primary/30 lg:scale-[1.02] z-10"
                  : "border-border/50 shadow-lg shadow-black/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:bg-card/90"
              )}
            >
              {/* Background 3D Composition */}
              <div className="absolute inset-0 -z-10 opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-1000">
                {service.bgAsset && (
                  <Image
                    src={service.bgAsset}
                    alt=""
                    fill
                    className="object-cover mix-blend-multiply"
                  />
                )}
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-inner border border-primary/20">
                  {React.cloneElement(service.icon as any, { className: "w-6 h-6 text-primary group-hover:rotate-12 transition-transform" })}
                </div>
                {service.isProduct && (
                  <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/15 text-emerald-700 rounded-full border border-emerald-500/30 shadow-sm animate-pulse">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider">Live</span>
                  </div>
                )}
              </div>

              <h4 className="text-2xl font-josefin font-bold mb-3 group-hover:text-primary transition-colors flex items-center">
                {service.title}
                {service.isExternal && <ArrowUpRight className="ml-1 w-5 h-5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />}
              </h4>

              <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow leading-relaxed font-medium">
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {service.highlights.map((h, j) => (
                  <li key={j} className="flex items-center space-x-3 group/highlight">
                    <div className="p-1.5 bg-primary/10 rounded-lg group-hover/highlight:bg-primary group-hover/highlight:text-white transition-all duration-300 flex-shrink-0">
                      {React.cloneElement(h.icon as any, {
                        className: cn("w-3.5 h-3.5 transition-colors",
                          "group-hover/highlight:text-white text-primary")
                      })}
                    </div>
                    <span className="text-xs font-semibold text-foreground/80 group-hover/highlight:text-foreground transition-colors">{h.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                target={service.isExternal ? "_blank" : undefined}
                className={cn(
                  "mt-auto w-full py-3 md:py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 text-center flex items-center justify-center group/btn overflow-hidden relative",
                  service.highlight
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 hover:scale-[1.02]"
                    : "bg-background text-foreground hover:bg-muted/50 border border-border hover:border-primary/30 shadow-sm"
                )}
              >
                <span className="relative z-10">{service.cta}</span>
                {service.isExternal && <ArrowUpRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                {service.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


