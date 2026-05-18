"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/lib/data";
import { MagneticButton } from "./ui/MagneticButton";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 10 },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-block">
            <span className="glass px-4 py-2 rounded-full text-sm font-medium tracking-wide border border-primary/30 text-primary">
              {siteData.hero.greeting}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]"
          >
            {siteData.hero.title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6 max-w-2xl"
          >
            {siteData.hero.subtitle}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-10 max-w-2xl"
          >
            {siteData.hero.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a href="#projects">
              <MagneticButton className="w-full sm:w-auto">
                Ver projetos
                <ArrowRight className="ml-2" size={18} />
              </MagneticButton>
            </a>
            <a href="#contact">
              <MagneticButton className="w-full sm:w-auto bg-transparent border border-border text-foreground hover:bg-muted">
                Entrar em contato
              </MagneticButton>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Tech Cards */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 pointer-events-none z-10">
        {["React", "Next.js", "TypeScript", "Prompt Engineering"].map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              delay: 1 + index * 0.2,
              type: "spring",
              stiffness: 100,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              },
            }}
            className="glass px-6 py-4 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
