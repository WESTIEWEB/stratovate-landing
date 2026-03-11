"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Phone } from "lucide-react";
import { default as Link } from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Contact Us Today</h2>
            <h3 className="text-4xl md:text-7xl font-josefin font-bold mb-8 italic leading-[1.1]">
              Move forward with clarity, capability, and confidence.
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-12">
              Whether you need premium training, strategic consulting, or intelligent solutions like Lexlytic, Stratovate Technologies is ready to help you take the next step with purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95 flex items-center justify-center">
                Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-white border-2 border-primary/10 text-foreground px-10 py-5 rounded-full font-bold text-lg hover:bg-muted/50 transition-all flex items-center justify-center">
                Speak With Our Team
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group p-4 rounded-2xl transition-colors hover:bg-white/50">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                  <a href="mailto:info@stratovatetech.com" className="text-lg font-bold hover:text-primary transition-colors underline decoration-primary/20">info@stratovatetech.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group p-4 rounded-2xl transition-colors hover:bg-white/50">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Visit Us</p>
                  <p className="text-lg font-bold">United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass relative p-10 md:p-14 rounded-[3rem] border-white/40 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="space-y-8 text-center">
              <h4 className="text-3xl font-josefin font-bold mb-4 italic">Ready to transform your operations?</h4>
              <p className="text-lg text-muted-foreground font-medium mb-8">
                Experience the power of Lexlytic and our strategic guidance. Our team is ready to discuss your specific goals and build a solution that delivers measurable results.
              </p>
              <Link href="/contact" className="inline-flex bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95">
                Book Your Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
