// components/Skills.tsx
import React from "react";
import { languages, tools } from "../data/siteData";
import ChromaGrid from '@/components/ChromaGrid';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      
      <h3 className="text-xl font-semibold mb-4">Languages</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
        {languages.map((lang, index) => (
          <div
            key={typeof lang === 'string' ? lang : index}  // Use lang if it's a unique string; fallback to index
            style={{ height: '600px', position: 'relative' }}
          >
            <ChromaGrid 
              items={lang}
              className="p-3 bg-white border rounded-lg shadow-sm text-base font-semibold"
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Tools</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
        {tools.map((tool, index) => (
          <div
            key={typeof tool === 'string' ? tool : index}  // Use tool if it's a unique string; fallback to index
            className="p-3 bg-white border rounded-lg shadow-sm text-base font-semibold"
          >
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}