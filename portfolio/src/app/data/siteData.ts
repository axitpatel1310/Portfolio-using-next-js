// data/siteData.ts
export type Project = {
  title: string;
  desc: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: 'Cash School — Full-Stack EdTech & Community Platform',
    desc: 'Django-based platform with pay-per-view monetization, real-time chat, role-based workflows, and advertising module.',
    link: 'https://github.com/axitpatel1310/Cashskool-django',
  },
  {
    title: 'AskAll — Full-Stack Q&A Platform',
    desc: 'Quora-style site built with Django. Advanced Search, tagging, activity-tracking, and personalized feeds.',
    link: 'https://github.com/axitpatel1310/AskAll-The-Quora-Clone-Using-Django',
  },
  {
    title: 'Pattern-Based Chatbot with PDF Generation & Image Editing',
    desc: 'Flask + Python project with JSONL-driven bot, on-demand PDF generation and an image editing suite (Pillow).',
    link: 'https://github.com/axitpatel1310/advance-chat-bot-flask',
  },
  {
    title: 'Revenue-Sharing Search Engine — Apex Engine',
    desc: 'Custom scraper & search engine with ad monetization and revenue-sharing model built using Django and BeautifulSoup.',
    link: 'https://github.com/axitpatel1310/Apex-Engine',
  },
];

export const education = {
  degree: 'Bachelor in Computer Application',
  college: 'Natubhai V. Patel College of Pure & Applied Sciences (Anand, Gujarat)',
  grade: '9.13 GPA',
};

export const research = {
  title: 'Personalized Fitness Coaching System using Computer Vision (Research Paper)',
  link: 'https://www.academia.edu/143796997/Personalized_Fitness_Coaching_System_using_Computer_Vision_Research_Paper_?source=swp_share',
};

export const languages = [
  'Python (Flask, Django, ML)',
  'JavaScript / TypeScript (Next.js, React, Node.js)',
  'C & C++',
  'Java',
  'HTML / CSS / Tailwind / Bootstrap',
  'SQL (MySQL, PostgreSQL)',
  'Bash / Shell scripting',
  'PHP',
  '.NET (VB, ASP)',
];

export const tools = [
  'PostgreSQL',
  'Postman',
  'GitHub',
  'Vercel',
  'Docker',
  'Podman',
  'MongoDB',
  'WordPress',
  'Google Blogger',
  'Wix Studio',
];

export const certificates = [
  '4 × National Level Competition Certificates',
  '1 × State Level Certificate',
  '2 × IoT Project Exhibition — University Fair',
  '1 × Interclass Competition Certificate',
  '1 × Business Model Representation Certificate',
];

export const contact = {
  emailPrimary: 'axitpatel1705@gmail.com',
  emailAlt: 'akky05727@gmail.com',
  phone: '+91 9924678435',
  location: 'Amod, Gujarat, India',
  github: 'https://github.com/axitpatel1310',
  linkedin: 'https://www.linkedin.com/in/axit-pankajbhai-patel-0a842b239',
  instagram: 'https://www.instagram.com/_itsakky1310_',
  youtubeProg: 'https://www.youtube.com/@akkysprogramming4113',
  youtubePersonal: 'https://www.youtube.com/@akkyaapatel',
  resume: '/Axit-Patel.pdf',
  udemy: 'https://www.udemy.com/course/python-crash-to-crack-for-beginners-in-hindi/?couponCode=MT80825A',
};
