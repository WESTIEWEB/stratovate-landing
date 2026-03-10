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
    description: "Intelligent insight for smarter execution. Our proprietary product built to support high-level analysis and informed leadership for modern enterprises.",
    highlights: [
      { text: "Informed, insight-driven decisions", icon: <BarChart3 className="w-4 h-4 text-primary" /> },
      { text: "Improved analytical clarity", icon: <ShieldCheck className="w-4 h-4 text-primary" /> },
      { text: "Streamlined workflow efficiency", icon: <Zap className="w-4 h-4 text-primary" /> },
      { text: "Scalable enterprise solution", icon: <Globe className="w-4 h-4 text-primary" /> }
    ],
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
    cta: "Discover Lexlytic",
    href: "https://www.lexlytic.com/",
    highlight: true,
    isExternal: true,
    isProduct: true,
    bgAsset: "/hero-graphic.png"
  },
  {
    title: "Training",
    description: "Practical learning designed for modern performance. Our programs are built for individuals and organizations that want capability, not just information.",
    highlights: [
      { text: "Practical, application-focused learning", icon: <Target className="w-4 h-4 text-primary" /> },
      { text: "Customizable sessions for teams", icon: <Users className="w-4 h-4 text-primary" /> },
      { text: "Digital-ready skill development", icon: <Cpu className="w-4 h-4 text-primary" /> },
      { text: "Clear, measurable outcomes", icon: <Layout className="w-4 h-4 text-primary" /> }
    ],
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    cta: "Ask About Training",
    href: "/contact",
    bgAsset: "/hero-graphic.png"
  },
  {
    title: "Consulting",
    description: "Strategic guidance for sharper decisions. We help businesses navigate complexity with greater structure and analytical insight.",
    highlights: [
      { text: "Business & tech strategy support", icon: <Layers className="w-4 h-4 text-primary" /> },
      { text: "Operational improvement guidance", icon: <BarChart3 className="w-4 h-4 text-primary" /> },
      { text: "Process refinement & optimization", icon: <Cpu className="w-4 h-4 text-primary" /> },
      { text: "Practical digital transformation", icon: <Zap className="w-4 h-4 text-primary" /> }
    ],
    icon: <Users className="w-12 h-12 text-primary" />,
    cta: "Request Support",
    href: "/contact",
    bgAsset: "/hero-graphic.png"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-40 relative overflow-hidden bg-muted/30">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-black tracking-[0.4em] text-primary uppercase mb-8 opacity-80">Our Expertise</h2>
            <h3 className="text-6xl md:text-8xl lg:text-9xl font-josefin font-bold mb-10 leading-[0.9]">
              Strategic Solutions for <br />
              <span className="text-gradient">Modern Growth</span>
            </h3>
            <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed italic border-x-2 border-primary/10 px-8">
              Practical, high-value solutions that integrate deep learning, strategic guidance, and intelligent tools.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={cn(
                "group relative p-12 rounded-[3.5rem] border border-border bg-white transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl flex flex-col h-full overflow-hidden",
                service.highlight ? "premium-shadow ring-1 ring-primary/20 scale-105 z-10 hover:ring-primary/40" : "hover:shadow-2xl grayscale-[0.5] hover:grayscale-0 hover:border-primary/20"
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

              <div className="flex justify-between items-start mb-10">
                <div className="p-5 bg-gradient-to-br from-primary/10 to-blue-400/5 rounded-[2rem] group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500 shadow-inner border border-primary/10">
                  {service.icon}
                </div>
                {service.isProduct && (
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full border border-green-500/20 animate-pulse">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Product</span>
                  </div>
                )}
              </div>
              
              <h4 className="text-4xl font-josefin font-bold mb-8 group-hover:text-primary transition-colors flex items-center">
                {service.title}
                {service.isExternal && <ArrowUpRight className="ml-2 w-6 h-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />}
              </h4>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 flex-grow leading-relaxed font-medium">
                {service.description}
              </p>
              
              <div className="space-y-5 mb-12">
                {service.highlights.map((h, j) => (
                  <div key={j} className="flex items-center space-x-4 group/highlight">
                    <div className="p-2 bg-primary/5 rounded-xl group-hover/highlight:bg-primary group-hover/highlight:text-white transition-all duration-300">
                      {React.cloneElement(h.icon as any, { 
                        className: cn("w-4 h-4 transition-colors", 
                        "group-hover/highlight:text-white text-primary")
                      })}
                    </div>
                    <span className="text-sm font-bold text-foreground/70 group-hover/highlight:text-foreground transition-colors">{h.text}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href={service.href}
                target={service.isExternal ? "_blank" : undefined}
                className={cn(
                  "w-full py-5 rounded-[2rem] font-bold text-xl transition-all active:scale-95 text-center flex items-center justify-center group/btn overflow-hidden",
                  service.highlight 
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02]" 
                    : "bg-secondary text-foreground hover:bg-muted border border-border hover:border-primary/20"
                )}
              >
                <span className="relative z-10">{service.cta}</span>
                {service.isExternal && <ArrowUpRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
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


