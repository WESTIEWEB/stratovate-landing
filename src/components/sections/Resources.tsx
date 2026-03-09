"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const outcomes = [
  "Stronger internal capability through practical skill development",
  "Greater clarity in business and technology decision-making",
  "Improved efficiency across workflows and operations",
  "More confident execution supported by expert guidance",
  "Smarter, more scalable ways to approach growth and performance"
];

export const Resources = () => {
  return (
    <div className="bg-background">
      <section id="outcomes" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Direct Impact</h2>
              <h3 className="text-4xl md:text-6xl font-josefin font-bold mb-8 italic leading-tight">What makes working with us possible</h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-8">
                When you partner with Stratovate Technologies, you gain more than a service—you gain focused support designed to improve how you learn, operate, and grow.
              </p>
            </motion.div>

            <div className="space-y-6">
              {outcomes.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start p-8 glass rounded-[2rem] border-primary/5 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="mr-6 mt-1">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">{i+1}</span>
                  </div>
                  <p className="text-xl font-bold text-foreground/80 leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

