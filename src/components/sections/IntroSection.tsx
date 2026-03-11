"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Shield, Zap } from "lucide-react";

export const IntroSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -ml-32" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-black tracking-[0.2em] text-primary uppercase mb-4">The Platform</h2>
                        <h3 className="text-4xl md:text-5xl font-josefin font-bold">Built for performance.</h3>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Large feature card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="w-14 h-14 bg-white dark:bg-card rounded-2xl flex items-center justify-center shadow-lg mb-8 border border-border">
                            <BarChart3 className="text-primary w-7 h-7" />
                        </div>
                        <h4 className="text-3xl font-bold font-josefin mb-3 italic">Lexlytic Engine</h4>
                        <p className="text-lg text-muted-foreground font-medium mb-10 max-w-md">
                            Intelligent data analysis driving predictive insights and streamlined operations.
                        </p>

                        {/* Fake UI Graphic inside the card */}
                        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/50 group-hover:-translate-y-2 transition-transform duration-500 max-w-sm">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Efficiency Growth</div>
                                <div className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-md">+24.5%</div>
                            </div>
                            <div className="flex items-end space-x-3 h-32 mt-4">
                                {[30, 45, 25, 60, 40, 70, 85].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                                        className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-md"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Small feature cards */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-1 bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold font-josefin mb-3">Enterprise Grade</h4>
                            <p className="text-muted-foreground font-medium">Secure, scalable, and built for modern organizations.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex-1 bg-gradient-to-br from-blue-600 to-primary rounded-3xl p-8 text-white relative overflow-hidden shadow-lg group hover:shadow-primary/30 transition-shadow"
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md group-hover:scale-110 transition-transform border border-white/10">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-2xl font-bold font-josefin mb-3">High Velocity</h4>
                            <p className="text-white/80 font-medium tracking-wide">Accelerate execution with practical, hands-on training.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
};
