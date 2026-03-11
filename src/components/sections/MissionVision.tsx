"use client";

import React from "react";
import { motion } from "framer-motion";

export const MissionVision = () => {
    return (
        <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 md:p-16 rounded-[3rem] bg-card border border-border/50 shadow-xl shadow-black/5"
                    >
                        <h2 className="text-sm font-black tracking-[0.2em] text-primary uppercase mb-6">Our Mission</h2>
                        <p className="text-2xl md:text-3xl font-josefin font-bold leading-tight text-foreground italic">
                            "To empower businesses and professionals with practical training, strategic consulting, and intelligent digital solutions that improve capability, support better decisions, and drive sustainable growth."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-10 md:p-16 rounded-[3rem] bg-primary text-white shadow-xl shadow-primary/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                        <h2 className="text-sm font-black tracking-[0.2em] text-white/60 uppercase mb-6">Our Vision</h2>
                        <p className="text-2xl md:text-3xl font-josefin font-bold leading-tight italic">
                            "To be a trusted technology partner for organizations seeking a smarter, more confident path to learning, innovation, and long-term success."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
