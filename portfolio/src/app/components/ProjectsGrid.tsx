// components/ProjectsGrid.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/siteData";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
