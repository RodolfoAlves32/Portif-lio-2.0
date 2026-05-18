"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Mail, MessageSquare, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { MagneticButton } from "./ui/MagneticButton";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // O usuário pode colar a chave gratuita do Web3Forms diretamente no .env.local
    // como NEXT_PUBLIC_WEB3FORMS_KEY ou colar diretamente abaixo.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY";
    
    try {
      if (accessKey === "YOUR_ACCESS_KEY") {
        // Fallback elegante de teste (simula o envio instantâneo sem quebrar)
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `Contato Portfólio: ${formData.subject}`,
            message: formData.message,
            from_name: formData.name,
            replyto: formData.email,
          }),
        });

        if (!response.ok) {
          throw new Error("Erro na resposta do servidor.");
        }
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      alert("Desculpe, ocorreu um erro ao enviar sua mensagem direto. Tente novamente mais tarde ou use os links de redes sociais.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Vamos criar <br /> algo juntos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            Estou aberto a oportunidades, projetos, networking e colaboração.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <a href={siteData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 glass rounded-2xl hover:bg-muted/50 transition-colors group">
              <div className="p-4 bg-background rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">GitHub</h3>
                <p className="text-muted-foreground text-sm">/{siteData.socials.github.split("/").pop()}</p>
              </div>
            </a>
            
            <a href={siteData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 glass rounded-2xl hover:bg-muted/50 transition-colors group">
              <div className="p-4 bg-background rounded-full group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">Conecte-se comigo</p>
              </div>
            </a>

            <a href={`mailto:${siteData.email}`} className="flex items-center gap-4 p-6 glass rounded-2xl hover:bg-muted/50 transition-colors group">
              <div className="p-4 bg-background rounded-full group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-muted-foreground text-sm">{siteData.email}</p>
              </div>
            </a>

            <a href={siteData.socials.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 glass rounded-2xl hover:bg-muted/50 transition-colors group">
              <div className="p-4 bg-background rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Me mande uma mensagem</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="absolute inset-0 bg-background/95 backdrop-blur-md z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
                  <p className="text-muted-foreground">Obrigado pelo contato. Retornarei o mais breve possível.</p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                  placeholder="Sobre o que quer falar?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              
              <MagneticButton 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 py-4 w-full md:w-auto self-end text-base"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    Enviar mensagem <Send size={18} className="ml-2" />
                  </>
                )}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
