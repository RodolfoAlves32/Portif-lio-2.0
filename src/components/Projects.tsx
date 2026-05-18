"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { MagneticButton } from "./ui/MagneticButton";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  fork: boolean;
}

const getLogoData = (name: string, githubLink: string, demoLink: string) => {
  const lowerName = name.toLowerCase();

  if (lowerName.includes('spotify')) return { url: 'https://api.iconify.design/simple-icons:spotify.svg', isLogo: true };
  if (lowerName.includes('covid')) return { url: 'https://api.iconify.design/simple-icons:python.svg', isLogo: true };
  if (lowerName.includes('streaming') || lowerName.includes('netflix')) return { url: 'https://api.iconify.design/simple-icons:netflix.svg', isLogo: true };
  if (lowerName.includes('podcast')) return { url: 'https://api.iconify.design/lucide:podcast.svg', isLogo: true };

  // Fallback para preview real ou opengraph
  if (demoLink && demoLink !== "#" && demoLink !== "") {
    return { url: `https://api.microlink.io/?url=${encodeURIComponent(demoLink)}&screenshot=true&meta=false&embed=screenshot.url`, isLogo: false };
  }

  return { url: `https://opengraph.githubassets.com/1/${githubLink.replace("https://github.com/", "")}`, isLogo: false };
}

export function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/github/pinned");
        const data: GitHubRepo[] = await res.json();

        if (Array.isArray(data)) {
          const formattedProjects = data
            .filter(repo => !repo.fork)
            .map(repo => ({
              id: repo.id.toString(),
              name: repo.name.replace(/-/g, " "),
              description: repo.description || `Projeto focado em ${repo.language || "tecnologias web"}.`,
              tech: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 4),
              status: "Publicado",
              github: repo.html_url,
              demo: repo.homepage || "#",
            }));

          setProjects(formattedProjects);
        }
      } catch (error) {
        console.error("Falha ao buscar repositórios:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Meus Projetos.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Sempre que eu subo algo novo no GitHub, aparece automaticamente aqui.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-96 glass rounded-3xl animate-pulse bg-muted/50 border border-border/50" />
            ))
          ) : projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors duration-500"
              >
                <div className="relative h-48 md:h-64 w-full overflow-hidden bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]" />
                  <img
                    src={getLogoData(project.name, project.github, project.demo).url}
                    alt={`Preview do repositório ${project.name}`}
                    className={`w-full h-full z-10 transition-transform duration-500 drop-shadow-2xl ${getLogoData(project.name, project.github, project.demo).isLogo
                        ? 'object-contain group-hover:scale-110 p-12 md:p-16 dark:invert opacity-80'
                        : 'object-cover group-hover:scale-105 object-top absolute inset-0'
                      }`}
                    loading="lazy"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 capitalize">{project.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs px-3 py-1 rounded-full font-medium bg-primary/20 text-primary">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo !== "#" && project.demo !== "" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform">
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t: string) => (
                      <span key={t} className="text-xs font-medium px-3 py-1 bg-muted rounded-md text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-12">
              Nenhum projeto encontrado no momento.
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <a href="https://github.com/RodolfoAlves32" target="_blank" rel="noreferrer">
            <MagneticButton className="px-8 py-4 text-base">
              Mais projetos no GitHub
              <ArrowUpRight className="ml-2" size={20} />
            </MagneticButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
