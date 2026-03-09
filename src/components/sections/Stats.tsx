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
        <div className="glass p-12 md:p-16 rounded-[3rem] grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto premium-shadow border-white/40">
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
                className="text-4xl md:text-5xl lg:text-6xl font-josefin font-bold text-primary mb-3 bg-clip-text"
              >
                {stat.value}
              </motion.p>
              <p className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
              
              {/* Decorative Line */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-px h-12 bg-primary/10 -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
