"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/lib/data";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-muted/30"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Sobre mim.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            {siteData.about.text}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.about.cards.map((card, index) => {
            const Icon = card.icon;
            // Alternate parallax directions for a dynamic feel
            const y = index % 2 === 0 ? y1 : y2;

            return (
              <motion.div
                key={card.title}
                style={{ y, opacity }}
                className="glass p-8 rounded-2xl flex flex-col items-start gap-4 group hover:bg-white/5 dark:hover:bg-black/20 transition-colors"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
