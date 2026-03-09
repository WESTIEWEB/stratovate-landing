"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What does Stratovate Technologies do?", a: "Stratovate Technologies provides premium technology-focused solutions through training, consulting, and intelligent tools such as Lexlytic to help businesses and professionals improve capabilities, solve challenges, and make smarter decisions." },
    { q: "Who are your services designed for?", a: "Our services are designed for businesses, startups, teams, institutions, and professionals seeking practical support for growth, performance improvement, and smarter ways of working." },
    { q: "Are your training programs customizable?", a: "Yes. Our training programs can be tailored to suit individual learners, teams, and organizations, ensuring relevance, practicality, and stronger outcomes." },
    { q: "What kind of consulting do you offer?", a: "We provide consulting support for business and technology strategy, operational improvement, process refinement, and digital transformation efforts." },
    { q: "What is Lexlytic?", a: "Lexlytic is our intelligent solution designed to support analysis, improve clarity, and help organizations make more informed decisions while operating more efficiently." },
    { q: "Do you work with both individuals and organizations?", a: "Yes. We support both individual professionals and organizations, depending on the scope and nature of the need." },
    { q: "How do we get started?", a: "You can contact us directly by email to discuss your goals, explore the right service, and learn how we can support your next step." }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-josefin font-bold mb-6 italic">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our services, training, and intelligent solutions.
            </p>
          </motion.div>

          {/* FAQ list */}
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-border bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  className="w-full p-8 text-left flex items-center justify-between group"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <span className="text-lg font-bold pr-8 group-hover:text-primary transition-colors">{faq.q}</span>
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform",
                    activeIndex === i && "rotate-180 bg-primary text-white"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-8 pt-0 text-muted-foreground border-t border-border mt-0 bg-muted/20 leading-relaxed italic text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Further help */}
          <div className="mt-24 p-12 bg-primary rounded-3xl text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent -z-0" />
            <MessageSquare className="w-12 h-12 mx-auto mb-6 text-white/50" />
            <h2 className="text-3xl font-josefin font-bold mb-4 relative z-10">Still have questions?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 relative z-10">We're here to help you move with clarity and confidence.</p>
            <Link href="/contact" className="relative z-10 inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
              Contact Us Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

