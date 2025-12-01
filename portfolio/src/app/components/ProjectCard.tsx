// components/ProjectCard.tsx
import React from "react";
import type { Project } from "../data/siteData";
import ElectricBorder from '@/components/ElectricBorder'


export default function ProjectCard({ title, desc, link }: Project) {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
    <article className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      <div className="flex items-center gap-3">
        <a href={link} target="_blank" rel="noreferrer" className="text-sm underline">View on GitHub</a>
        <a href="mailto:axitpatel1705@gmail.com" className="ml-auto text-sm px-3 py-1 border rounded-md">Discuss</a>
      </div>
    </article>
</ElectricBorder>
  );
}
