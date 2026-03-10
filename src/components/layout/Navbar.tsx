"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Outcomes", href: "/#outcomes" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 glass border-b border-white/20 shadow-lg backdrop-blur-xl" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center space-x-2">
          <span className="font-josefin text-2xl font-bold tracking-tighter text-primary group-hover:scale-105 transition-transform">
            STRATOVATE<span className="text-foreground transition-colors group-hover:text-primary/80 italic"> TECHNOLOGIES</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/5"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 border border-white/20"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-3 text-foreground hover:bg-primary/10 rounded-xl transition-colors duration-300" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 }
              }}
              className="absolute top-1 left-0 w-6 h-0.5 bg-current transform origin-center transition-all"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="absolute top-3 left-0 w-6 h-0.5 bg-current transform origin-center transition-all"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 }
              }}
              className="absolute top-5 left-0 w-6 h-0.5 bg-current transform origin-center transition-all"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-white/20 overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-xl font-bold text-foreground border-b border-border/50 pb-2 hover:text-primary hover:border-primary/50 transition-all duration-300 block py-3 px-4 rounded-lg hover:bg-primary/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link 
                  href="#contact" 
                  onClick={() => setIsOpen(false)} 
                  className="bg-gradient-to-r from-primary to-blue-600 text-white px-5 py-4 rounded-2xl text-center font-bold shadow-xl hover:shadow-2xl transition-all duration-300 block w-full"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
