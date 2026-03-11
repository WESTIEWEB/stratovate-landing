"use client";

import React from "react";
import { motion } from "framer-motion";

const props = [
  { title: "Practical by design", desc: "We focus on solutions that work in real-world environments—clear, relevant, and built for meaningful application." },
  { title: "Strategic in approach", desc: "Our services are not generic. We align our support with your priorities, challenges, and goals to deliver greater value." },
  { title: "Professional in delivery", desc: "We bring clarity, structure, and thoughtful execution to every engagement, helping clients move forward with confidence." },
  { title: "Built for growth", desc: "From capability development to decision support, our work is designed to strengthen performance today while supporting progress for the future." }
];

export const CoreValues = () => {
  return (
    <div id="about" className="relative">
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-black tracking-[0.2em] text-primary uppercase mb-6">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-josefin font-bold mb-8 italic leading-tight">
                Built around capability, <br />
                <span className="text-primary not-italic">clarity, and execution.</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 max-w-xl">
                Stratovate Technologies is a modern, solutions-driven company focused on helping businesses and professionals thrive in a digital-first world.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-sm">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="group relative">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-primary/10">
                      {num}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-1 md:p-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-400/10 to-transparent blur-[80px] -z-10" />

              <div className="glass p-10 md:p-14 rounded-[3.5rem] border-white/40 premium-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                <p className="text-2xl leading-relaxed text-foreground font-josefin font-bold mb-8 italic">
                  "We provide premium support through carefully designed training, insight-led consulting, and intelligent solutions that address real business needs with precision and purpose."
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  Rather than offering complexity for its own sake, we focus on what is useful, practical, and capable of delivering meaningful results. Whether you are looking to strengthen your team, improve operational direction, or adopt smarter ways of working, Stratovate Technologies delivers solutions aligned with growth, performance, and long-term value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[150px] -mr-[400px] -mt-[400px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black tracking-[0.2em] text-white/60 uppercase mb-4">Value Proposition</h2>
            <h3 className="text-3xl md:text-5xl font-josefin font-bold text-white mb-6">Why organizations choose Stratovate Technologies</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {props.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group space-y-6"
              >
                <div className="w-16 h-1 bg-white/20 mb-6 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full bg-white/80"
                  />
                </div>
                <h4 className="text-2xl font-josefin font-bold group-hover:translate-x-2 transition-transform">{p.title}</h4>
                <p className="text-white/70 text-base leading-relaxed font-medium">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

