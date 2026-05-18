"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Zap, Box } from "lucide-react";

const cards = [
  { icon: Sparkles, title: "Prompt Engineering", desc: "Criação de prompts otimizados para extrair o máximo de modelos de IA." },
  { icon: Zap, title: "Prototipação Rápida", desc: "Uso de ferramentas modernas para transformar ideias em interfaces funcionais em horas." },
  { icon: Cpu, title: "Automação", desc: "Integração de IA para automatizar tarefas repetitivas e aumentar a produtividade." },
  { icon: Box, title: "Geração de Interfaces", desc: "Construção de componentes UI complexos com auxílio de inteligência artificial." },
];

export function LowCodeAI() {
  return (
    <section className="py-32 relative overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="font-medium text-white/80">Inteligência Artificial & Low-Code</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Acelerando a criação de produtos com IA.
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Utilizo ferramentas modernas de inteligência artificial e plataformas low-code para 
            desenvolver soluções de forma mais inteligente, rápida e eficiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div className="relative z-10 flex flex-col items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-white/60 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
