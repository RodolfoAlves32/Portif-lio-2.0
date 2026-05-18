"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { LowCodeAI } from "@/components/LowCodeAI";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <main className="min-h-screen">
          <CustomCursor />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Timeline />
          <LowCodeAI />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
