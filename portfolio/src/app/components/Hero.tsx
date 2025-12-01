// components/Hero.tsx
import React from "react";
import { research, contact, education } from "../data/siteData";
import SplitText from "@/components/SplitText";
import Magnet from '@/components/Magnet'
import AnimatedContent from '@/components/AnimatedContent'

export default function Hero() {
  return (
    <section className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">          
            <SplitText
              text="Building scalable web apps and sharing what I learn."
              className="text-4xl font-extrabold mb-3"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          <p className="text-gray-700 mb-6">I design and ship production-ready web applications, teach programming through videos/courses, and publish research on applying computer vision to fitness coaching.</p>
          <div className="flex flex-wrap gap-3">           
          <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
            <a href={`mailto:${contact.emailAlt}`} style={{ margin: "0 5px" }} className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">Email</a>
            <a href={contact.github} style={{ margin: "0 5px" }} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">GitHub</a>
            <a href={research.link} style={{ margin: "0 5px" }} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">Research Paper</a>
            <a href={contact.resume} style={{ margin: "0 5px" }} className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">Resume (PDF)</a>
            </AnimatedContent>
          </div>
        </div>

      <Magnet padding={150} disabled={false} magnetStrength={1}>
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-4 shadow-sm">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Location</h3>
              <p className="text-sm">{contact.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Top Skills</h3>
              <p className="text-sm">Django • Flask • Next.js • Python • Docker • Git</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500">Education</h3>
              <p className="text-sm">{education.degree} — {education.college} • GPA: {education.grade}</p>
            </div>
          </div>
        </div>
      </Magnet>

      </div>
    </section>
  );
}
