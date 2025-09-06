import React from 'react'
const projects = [
  {
    title: 'Cash School — Full-Stack EdTech & Community Platform',
    desc: 'Django-based platform with pay-per-view monetization, real-time chat, role-based workflows, and advertising module.',
    link: 'https://github.com/axitpatel1310/Cashskool-django'
  },
  {
    title: 'AskAll — Full-Stack Q&A Platform',
    desc: 'Quora-style site built with Django. Advanced Search, tagging, activity-tracking, and personalized feeds.',
    link: 'https://github.com/axitpatel1310/AskAll-The-Quora-Clone-Using-Django'
  },
  {
    title: 'Pattern-Based Chatbot with PDF Generation & Image Editing',
    desc: 'Flask + Python project with JSONL-driven bot, on-demand PDF generation and an image editing suite (Pillow).',
    link: 'https://github.com/axitpatel1310/advance-chat-bot-flask'
  },
  {
    title: 'Revenue-Sharing Search Engine — Apex Engine',
    desc: 'Custom scraper & search engine with ad monetization and revenue-sharing model built using Django and BeautifulSoup.',
    link: 'https://github.com/axitpatel1310/Apex-Engine'
  }
]

const education = {
  degree: 'Bachelor in Computer Application',
  college: 'Natubhai V. Patel College of Pure & Applied Sciences (Anand, Gujarat)',
  grade: '9.13 GPA'
}

const research = {
  title: 'Personalized Fitness Coaching System using Computer Vision (Research Paper)',
  link: 'https://www.academia.edu/143796997/Personalized_Fitness_Coaching_System_using_Computer_Vision_Research_Paper_'
}

const languages = [
  'Python (Flask, Django, ML)',
  'JavaScript / TypeScript (Next.js, React, Node.js)',
  'C & C++',
  'Java',
  'HTML / CSS / Tailwind / Bootstrap',
  'SQL (MySQL, PostgreSQL)',
  'Bash / Shell scripting',
  'PHP',
  '.NET (VB, ASP)'
]

const tools = [
  'PostgreSQL',
  'Postman',
  'GitHub',
  'Vercel',
  'Docker',
  'Podman',
  'MongoDB',
  "wordpress",
  "Google Blogger",
  "Wix Studio"
]

const certificates = [
  '4 × National Level Competition Certificates',
  '1 × State Level Certificate',
  '2 × IoT Project Exhibition — University Fair',
  '1 × Interclass Competition Certificate',
  '1 × Business Model Representation Certificate'
]

import { LinkedinIcon, InstagramIcon, PhoneIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">AP</div>
          <div>
            <h1 className="text-2xl font-extrabold">Axit Pankajbhai Patel</h1>
            <p className="text-sm text-gray-600">Full‑Stack Engineer • Researcher • Open‑Source Contributor</p>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#research" className="hover:underline">Research</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="mailto:axitpatel1705@gmail.com" className="px-3 py-2 bg-emerald-600 text-white rounded-md">Contact</a>
        </nav>
        <div className="flex items-center gap-4 mt-2">
          <a href="https://wa.me/919924678435" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-emerald-600">
            <PhoneIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/axit-pankajbhai-patel-0a842b239" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-emerald-600">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://www.instagram.com/_itsakky1310_" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-emerald-600">
            <InstagramIcon size={20} />
          </a>
        </div>
      </header>

      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-extrabold mb-3">Building scalable web apps and sharing what I learn.</h2>
            <p className="text-gray-700 mb-6">I design and ship production-ready web applications, teach programming through videos/courses, and publish research on applying computer vision to fitness coaching.</p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:akky05727@gmail.com" className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">Email</a>
              <a href="https://github.com/axitpatel1310" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">GitHub</a>
              <a href={research.link} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">Research Paper</a>
              <a href="/Axit-Patel.pdf" className="px-4 py-2 border border-gray-200 rounded-md hover:shadow">Resume (PDF)</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500">Location</h3>
                <p className="text-sm">Amod, Gujarat, India</p>
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
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
              <div className="flex items-center gap-3">
                <a href={p.link} target="_blank" rel="noreferrer" className="text-sm underline">View on GitHub</a>
                <a href="mailto:axitpatel1705@gmail.com" className="ml-auto text-sm px-3 py-1 border rounded-md">Discuss</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-4">Research & Publication</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{research.title}</h3>
              <p className="text-gray-700 mt-2 mb-4">Published on Academia.edu — an applied research project applying computer vision and anthropometric feature extraction to personalized fitness coaching.</p>
              <a href={research.link} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border rounded-md">Read on Academia.edu</a>
            </div>
            <div className="w-full md:w-1/3 bg-emerald-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-500">Metrics</h4>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>97 YouTube tutorials created (see CV)</li>
                <li>Udemy course: &quot;Python for Beginners&quot;</li>
                <li>30+ GitHub projects — active open-source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>

        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {languages.map((lang) => (
            <div key={lang} className="p-3 bg-white border rounded-lg shadow-sm text-base font-semibold">{lang}</div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {tools.map((tool) => (
            <div key={tool} className="p-3 bg-white border rounded-lg shadow-sm text-base font-semibold">{tool}</div>
          ))}
        </div>
      </section>

      <section id="certificates" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Certificates, Awards & Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <details className="bg-white border rounded-lg shadow-sm p-4">
              <summary className="cursor-pointer text-xl font-semibold mb-2">Certificates & Awards</summary>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                {certificates.map((item) => (
                  <li key={item} className="text-base font-medium">{item}</li>
                ))}
                <li className="text-base font-medium">Coursera Courses (to be listed)</li>
              </ul>
            </details>
          </div>

          <div>
            <details className="bg-white border rounded-lg shadow-sm p-4">
              <summary className="cursor-pointer text-xl font-semibold mb-2">Extracurricular</summary>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                <li className="text-base font-medium">Served 1 year in NSS</li>
                <li className="text-base font-medium">Organizing Team college cricket league for 2 years</li>
                <li className="text-base font-medium">Volunteered in Red Cross blood donation drives for 2 years</li>
              </ul>
            </details>
          </div>

          <div>
            <details className="bg-white border rounded-lg shadow-sm p-4">
              <summary className="cursor-pointer text-xl font-semibold mb-2">Courses (Coursera)</summary>
              <ul className="list-disc list-inside space-y-4 text-gray-700 mt-3">
                <li className="text-base font-medium">
                  <span className="font-semibold">Python Basic Structures: Lists, Strings, and Files</span> — Codio<br />
                  <span className="text-sm text-gray-600">Grade Achieved: 93.33%</span>
                </li>
                <li className="text-base font-medium">
                  <span className="font-semibold">Introduction to Artificial Intelligence (AI)</span> — IBM<br />
                  <span className="text-sm text-gray-600">Grade Achieved: 98%</span>
                </li>
                <li className="text-base font-medium">
                  <span className="font-semibold">Introduction to Java</span> — LearnQuest<br />
                  <span className="text-sm text-gray-600">Grade Achieved: 84.62%</span>
                </li>
                <li className="text-base font-medium">
                  <span className="font-semibold">Introduction to the Internet of Things and Embedded Systems</span> — University of California, Irvine<br />
                  <span className="text-sm text-gray-600">Grade Achieved: 95.37%</span>
                </li>
                <li className="text-base font-medium">
                  <span className="font-semibold">Python Object Basics: Functions, Recursion, and Objects</span> — Codio<br />
                  <span className="text-sm text-gray-600">Grade Achieved: 90%</span>
                </li>
                <li className="text-base font-medium">
                  <span className="font-semibold">SQL for Data Science</span> — University of California, Davis<br />
                  <span className="text-sm text-gray-600">Grade Achieved: 89.06%</span>
                </li>
              </ul>
            </details>
          </div>

        </div>
      </section>


      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-700">{`I'm a results-driven problem solver focused on building meaningful software products. I enjoy teaching and open-source. If you'd like to collaborate or hire me, let's talk.`}</p>
      </section>

      <footer id="contact" className="bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg">Get in touch</h3>
            <p className="text-sm mt-2">Email: <a href="mailto:axitpatel1705@gmail.com" className="underline">axitpatel1705@gmail.com</a></p>
            <p className="text-sm">Phone: +91 9924678435</p>
          </div>

          <div>
            <h3 className="font-bold text-lg">Links</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li><a href="https://github.com/axitpatel1310" target="_blank" rel="noreferrer" className="underline">GitHub</a></li>
              <li><a href={research.link} target="_blank" rel="noreferrer" className="underline">Academia.edu - Research Paper</a></li>
              <li><a href="https://www.youtube.com/@akkysprogramming4113" target="_blank" rel="noreferrer" className="underline">YouTube (Programming)</a></li>
              <li><a href="https://www.youtube.com/@akkyaapatel" target="_blank" rel="noreferrer" className="underline">YouTube (Personal)</a></li>
              <li><a href="https://www.udemy.com/course/python-crash-to-crack-for-beginners-in-hindi/?couponCode=MT80825A" target="_blank" rel="noreferrer" className="underline">Udemy Course</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Quick contact</h3>
            <p className="text-sm mt-2">Prefer a quick chat? Send an email or use the &quot;Discuss&quot; buttons on project cards to start a conversation.</p>
          </div>
        </div>
        <div className="text-center text-xs bg-gray-800 py-3">© {new Date().getFullYear()} Axit Patel — Built with Next.js & Tailwind</div>
      </footer>
    </main>
  )
}