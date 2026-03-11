"use client"

import React from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-josefin font-bold mb-8 leading-tight italic">
                Move forward with <br /><span className="text-primary">clarity, capability, and confidence.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 italic">
                Whether you need premium training, strategic consulting, or intelligent solutions like Lexlytic, Stratovate Technologies is ready to help you take the next step with purpose.
              </p>

              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mr-6 border border-primary/20">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">Send an Email</p>
                    <a href="mailto:info@stratovatetech.com" className="text-2xl font-josefin font-bold hover:text-primary transition-colors underline decoration-primary/20">info@stratovatetech.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mr-6 border border-primary/20">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">Our Location</p>
                    <p className="text-2xl font-josefin font-bold">United Kingdom</p>
                  </div>
                </div>
              </div>

              <p className="mt-16 text-muted-foreground border-l-4 border-primary pl-6 italic max-w-lg leading-relaxed">
                We welcome conversations with businesses and professionals looking for practical, high-value support.
              </p>
            </div>

            <div className="bg-muted p-8 md:p-12 rounded-[2.5rem] border border-border shadow-inner">
              <h2 className="text-3xl font-josefin font-bold mb-8 italic">Speak with our team.</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold/80 ml-2">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold/80 ml-2">Company Name</label>
                    <input type="text" placeholder="Company Inc." className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold/80 ml-2">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold/80 ml-2">How can we help?</label>
                  <textarea rows={4} placeholder="I want to discuss training options..." className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 mt-4">
                  Request a Consultation <Send className="ml-3 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

