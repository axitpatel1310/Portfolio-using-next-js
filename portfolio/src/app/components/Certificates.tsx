// components/Certificates.tsx
import React from "react";
import { certificates } from "../data/siteData";

export default function Certificates() {
  return (
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
    
  );
}
