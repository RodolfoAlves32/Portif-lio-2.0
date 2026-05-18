"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", label: "Front-end" },
  { id: "design", label: "Design & UI" },
  { id: "ai", label: "IA & Low-code" },
  { id: "tools", label: "Ferramentas" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentSkills = siteData.skills[activeCategory as keyof typeof siteData.skills] || [];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Habilidades.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Tecnologias e ferramentas que domino para criar produtos digitais excepcionais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative h-32 glass rounded-2xl flex flex-col items-center justify-center p-6 cursor-pointer overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                
                {/* Progress indicator */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-primary/50 transition-all duration-700 ease-out origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ width: `${skill.level}%` }}
                />

                <span className="relative z-10 text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                  {skill.name}
                </span>
                
                <span className="relative z-10 text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Nível: {skill.level}%
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
