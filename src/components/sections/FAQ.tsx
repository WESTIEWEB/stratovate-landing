"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What does Stratovate Technologies do?",
        answer: "Stratovate Technologies provides premium technology-focused solutions through training, consulting, and intelligent tools such as Lexlytic to help businesses and professionals improve capabilities, solve challenges, and make smarter decisions."
    },
    {
        question: "Who are your services designed for?",
        answer: "Our services are designed for businesses, startups, teams, institutions, and professionals seeking practical support for growth, performance improvement, and smarter ways of working."
    },
    {
        question: "Are your training programs customizable?",
        answer: "Yes. Our training programs can be tailored to suit individual learners, teams, and organizations, ensuring relevance, practicality, and stronger outcomes."
    },
    {
        question: "What kind of consulting do you offer?",
        answer: "We provide consulting support for business and technology strategy, operational improvement, process refinement, and digital transformation efforts."
    },
    {
        question: "What is Lexlytic?",
        answer: "Lexlytic is our intelligent solution designed to support analysis, improve clarity, and help organizations make more informed decisions while operating more efficiently."
    },
    {
        question: "Do you work with both individuals and organizations?",
        answer: "Yes. We support both individual professionals and organizations, depending on the scope and nature of the need."
    },
    {
        question: "How do we get started?",
        answer: "You can contact us directly by email to discuss your goals, explore the right service, and learn how we can support your next step."
    }
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black tracking-[0.2em] text-primary uppercase mb-4">Support</h2>
                        <h3 className="text-4xl md:text-5xl font-josefin font-bold">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-border rounded-3xl overflow-hidden transition-all duration-300 hover:border-primary/30">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none bg-white"
                                >
                                    <span className="text-lg md:text-xl font-bold text-foreground">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                                </button>
                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 md:px-8 md:pb-8 text-muted-foreground font-medium text-lg leading-relaxed border-t border-border/50">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
