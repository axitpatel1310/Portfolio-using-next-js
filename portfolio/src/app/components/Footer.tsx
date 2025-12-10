// components/Footer.tsx
import React from "react";
import { contact, research } from "../data/siteData";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-100 overflow-visible relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg">Get in touch</h3>
          <p className="text-sm mt-2">Email: <a href={`mailto:${contact.emailPrimary}`} className="underline">{contact.emailPrimary}</a></p>
          <p className="text-sm">Phone: {contact.phone}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Links</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href={contact.github} target="_blank" rel="noreferrer" className="underline">GitHub</a></li>
            <li><a href={research.link} target="_blank" rel="noreferrer" className="underline">Academia.edu - Research Paper</a></li>
            <li><a href={contact.youtubeProg} target="_blank" rel="noreferrer" className="underline">YouTube (Programming)</a></li>
            <li><a href={contact.youtubePersonal} target="_blank" rel="noreferrer" className="underline">YouTube (Personal)</a></li>
            <li><a href={contact.udemy} target="_blank" rel="noreferrer" className="underline">Udemy Course</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Quick contact</h3>
          <p className="text-sm mt-2">Prefer a quick chat? Send an email or use the Discuss buttons on project cards to start a conversation.</p>
        </div>
      </div>
      <div className="text-center text-xs bg-gray-800 py-3">© {new Date().getFullYear()} Axit Patel — Built with Next.js & Tailwind</div>
    </footer>
  );
}
