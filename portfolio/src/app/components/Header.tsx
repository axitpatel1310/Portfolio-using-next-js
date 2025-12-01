// components/Header.tsx
import React from "react";
import { PhoneIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import { contact } from "../data/siteData";
import BubbleMenu from '@/components/BubbleMenu'


const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#blog',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between">

        {/* Left: Logo + Name */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-20 md:h-14 rounded-full flex items-center justify-center md:text-xl">
          </div>
          <div>
            <h1 className="text-lg md:text-1xl font-extrabold">Axit Pankajbhai Patel</h1>
            <p className="text-xs md:text-sm text-gray-600">
              Full-Stack Engineer • Researcher • Open-Source Contributor
            </p>
          </div>
        </div>

        {/* Right: Desktop Navigation */}
        
            <BubbleMenu
              items={items}
              menuAriaLabel="Toggle navigation"
              menuBg="#ffffff"
              menuContentColor="#111111"
              useFixedPosition={false}
              animationEase="back.out(1.5)"
              animationDuration={0.5}
              staggerDelay={0.12}
            />
          {/* Social Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 ml-2 text-gray-600">
            <a
              href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              <PhoneIcon size={18} />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600"
            >
              <InstagramIcon size={18} />
            </a>
          </div>  
        </div>
      </div>
    </header>
  );
}
