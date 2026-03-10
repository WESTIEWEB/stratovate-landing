"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 bg-primary text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="text-center md:text-left">
            <Link href="/" className="font-josefin text-3xl font-bold tracking-tighter text-white">
              STRATOVATE<span className="text-white/80 italic"> TECHNOLOGIES</span>
            </Link>
            <p className="mt-4 text-white/60 font-medium max-w-sm">
              Empowering organizations with practical innovation and strategic clarity.
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" }
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                aria-label={label}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary hover:border-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Stratovate Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-8 text-sm font-bold text-white/40 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <motion.button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
