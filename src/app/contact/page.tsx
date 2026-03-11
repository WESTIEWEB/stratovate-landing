"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight, Send, CheckCircle2, Home, RefreshCcw, Loader2 } from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Google Form Integration Placeholders
    // Replace these with your actual IDs once you have them
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    const ENTRY_IDS = {
      name: "entry.123456789",
      company: "entry.987654321",
      email: "entry.112233445",
      message: "entry.556677889"
    };

    const formBody = new URLSearchParams();
    formBody.append(ENTRY_IDS.name, formData.name);
    formBody.append(ENTRY_IDS.company, formData.company);
    formBody.append(ENTRY_IDS.email, formData.email);
    formBody.append(ENTRY_IDS.message, formData.message);

    try {
      // Using 'no-cors' because Google Forms doesn't support CORS for direct POSTs,
      // but the data will still be submitted.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Since we use 'no-cors', we won't get a real status back, 
      // so we assume success if no actual network error occurs.
      setStatus('success');
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: "", company: "", email: "", message: "" });
    setStatus('idle');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-josefin font-bold mb-12 leading-tight italic">
                Move forward with <br /><span className="text-primary">clarity, capability, and confidence.</span>
              </h1>

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
                Connect with us for practical, high-value support.
              </p>
            </div>

            <div className="bg-muted p-8 md:p-12 rounded-[2.5rem] border border-border shadow-inner relative overflow-hidden">
              {status === 'success' ? (
                <div className="text-center py-10 space-y-8 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-josefin font-bold italic">Message Sent!</h2>
                  <p className="text-xl text-muted-foreground italic max-w-sm mx-auto">
                    Thanks for reaching out! Our team will get back to you shortly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-white border border-border text-foreground px-6 py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-white/80 transition-all"
                    >
                      <RefreshCcw className="w-5 h-5 mr-3" /> Send Another
                    </button>
                    <Link
                      href="/"
                      className="flex-1 bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-bold flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                    >
                      <Home className="w-5 h-5 mr-3" /> Go Home
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-josefin font-bold mb-8 italic">Let's Talk.</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold/80 ml-2">Your Name</label>
                        <input
                          required
                          disabled={status === 'submitting'}
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold/80 ml-2">Company Name</label>
                        <input
                          required
                          disabled={status === 'submitting'}
                          type="text"
                          placeholder="Company Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold/80 ml-2">Email Address</label>
                      <input
                        required
                        disabled={status === 'submitting'}
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold/80 ml-2">How can we help?</label>
                      <textarea
                        required
                        disabled={status === 'submitting'}
                        rows={4}
                        placeholder="I want to discuss training options..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-background border border-border px-5 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none disabled:opacity-50"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm font-bold ml-2">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 mt-4 disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="mr-3 w-5 h-5 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Request a Consultation <Send className="ml-3 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

