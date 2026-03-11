"use client";

import React from "react";
import { motion } from "framer-motion";

export const IntroSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -ml-32" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-black tracking-[0.2em] text-primary uppercase mb-6">Introduction</h2>
                        <h3 className="text-3xl md:text-5xl font-josefin font-bold mb-10 leading-tight">
                            A trusted partner for modern growth and <br className="hidden md:block" />
                            <span className="text-primary italic">intelligent execution</span>
                        </h3>

                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                            <p>
                                In a fast-changing business environment, progress depends on more than ambition. It requires the right knowledge, the right strategy, and the right systems to move effectively.
                            </p>
                            <p className="text-foreground">
                                Stratovate Technologies exists to help organizations and professionals bridge that gap.
                            </p>
                            <p>
                                We deliver practical, high-value solutions that integrate learning, strategic guidance, and intelligent tools, designed to help our clients operate more effectively, build stronger internal capabilities, and make better decisions with confidence.
                            </p>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <div className="h-1 w-24 bg-primary/20 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
