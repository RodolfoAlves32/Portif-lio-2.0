"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/lib/data";
import { Database, Code2, Brain, ExternalLink, Award, X } from "lucide-react";

const categories = ["Todos", "Front-end", "Banco de Dados", "Prompt Engineering / IA"];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Front-end":
      return <Code2 size={16} />;
    case "Banco de Dados":
      return <Database size={16} />;
    case "Prompt Engineering / IA":
      return <Brain size={16} />;
    default:
      return <Award size={16} />;
  }
};

export function Certificates() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const filteredCertificates = certificates.filter(
    (cert) => activeCategory === "Todos" || cert.category === activeCategory
  );

  return (
    <section id="certificates" className="py-32 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-blob" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Certificados.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cursos, formações e certificações que fortalecem minha evolução em desenvolvimento web, banco de dados e inteligência artificial.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "glass hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="group relative flex flex-col glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.1)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
                aria-label={`Visualizar certificado de ${cert.title}`}
              >
                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                      {getCategoryIcon(cert.category)}
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-medium">
                    {cert.institution}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <span>{cert.hours}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pop-up / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden border border-border/50 shadow-2xl flex flex-col md:flex-row bg-background/90"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full glass hover:bg-primary hover:text-white transition-colors duration-300 text-foreground"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {/* Certificate Image Frame */}
              <div className="flex-1 bg-black/20 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-border/50 min-h-[300px]">
                <img
                  src={selectedCert.image}
                  alt={`Imagem do certificado ${selectedCert.title}`}
                  className="max-h-[50vh] md:max-h-[70vh] object-contain rounded-lg shadow-md border border-border/20"
                />
              </div>

              {/* Certificate Details */}
              <div className="w-full md:w-80 p-8 flex flex-col justify-between">
                <div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider w-fit mb-4">
                    {getCategoryIcon(selectedCert.category)}
                    {selectedCert.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold mb-3 leading-tight">
                    {selectedCert.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    Emitido por <strong className="text-foreground">{selectedCert.institution}</strong>
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-border/50 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Carga horária:</span>
                      <span className="font-medium">{selectedCert.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Conclusão:</span>
                      <span className="font-medium">{selectedCert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 text-sm"
                  >
                    Abrir arquivo original
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
