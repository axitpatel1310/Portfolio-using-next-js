// components/Research.tsx
import React from "react";
import { research } from "../data/siteData";
import Magnet from '@/components/Magnet'
import ScrambledText from '@/components/ScrambledText';

export default function ResearchCard() {
  return (
    <section id="research" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <ScrambledText
          className="text-2xl font-bold mb-4"
          radius={10}
          duration={1.2}
          speed={0.5}
          scrambleChars={`.:`}
        >
        Research & Publication
        </ScrambledText>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{research.title}</h3>
            <p className="text-gray-700 mt-2 mb-4">Published on Academia.edu — an applied research project applying computer vision and anthropometric feature extraction to personalized fitness coaching.</p>
            <a href={research.link} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border rounded-md">Read on Academia.edu</a>
          </div>
          <div className="w-full md:w-1/3 bg-emerald-50 rounded-lg p-4">
          <Magnet padding={150} disabled={false} magnetStrength={1}>
            <h4 className="text-sm font-semibold text-gray-500">Metrics</h4>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>97 YouTube tutorials created (see CV)</li>
              <li>Udemy course: "Python for Beginners"</li>
              <li>30+ GitHub projects — active open-source contributor</li>
            </ul>
          </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
