"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Successful Projects", value: "250+" },
  { label: "Expert Consultants", value: "45+" },
  { label: "Global Presence", value: "12 Countries" },
  { label: "Client Satisfaction", value: "99%" }
];

export const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass p-12 md:p-16 rounded-[3rem] grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto premium-shadow border-white/40 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-4 left-4 w-32 h-32 border border-primary/20 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 border border-primary/20 rounded-2xl rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/20 rounded-full"></div>
          </div>
          
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <motion.p 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.1 + 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-josefin font-bold text-primary mb-3 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-all duration-300"
              >
                {stat.value}
              </motion.p>
              <p className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{stat.label}</p>
              
              {/* Decorative Line */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-px h-12 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 group-hover:from-primary/40 group-hover:via-primary/60 group-hover:to-primary/40 transition-all duration-300" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
