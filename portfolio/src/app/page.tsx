// app/page.tsx
"use client";
import React from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import ResearchCard from "@/app/components/Research";
import Skills from "@/app/components/Skills";
import Certificates from "@/app/components/Certificates";
import Footer from "@/app/components/Footer";
import SplashCursor from '@/components/SplashCursor'
import FallingText from '@/components/FallingText';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray text-gray-900 antialiased">
      <SplashCursor />

      <Header />
      <Hero />
      <ProjectsGrid />
      <ResearchCard />
      <Skills />
      <Certificates />
      <section id="about" className="max-w-6xl mx-auto px-5 py-8">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <FallingText
          text={`I'm a results-driven problem solver focused on building meaningful software products. I enjoy teaching and open-source. If you'd like to collaborate or hire me, let's talk.`}
          highlightWords={["results-driven", "problem", "software", "teaching", "open-source", "collaborate"] as string[]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.2}
          fontSize="1rem"
          mouseConstraintStiffness={0.9}
          className="text-gray-800 overflow-visible absolute"
        />
      </section>
      <Footer />
    </main>
  );
}