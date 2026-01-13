import { IProject } from '@/types';

export const GENERAL_INFO = {
  email: 'trantai09032003@gmail.com',

  emailSubject: "Let's collaborate on a project",
  emailBody: 'Hi Andrew Tran, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
  { name: 'github', url: 'https://github.com/trantai3' },
  { name: 'facebook', url: 'https://www.facebook.com/tai09032003' },
];

export const MY_STACK = {
  frontend: [
    {
      name: 'JavaScript',
      icon: '/logo/js.png',
    },
    {
      name: 'TypeScript',
      icon: '/logo/ts.png',
    },
    {
      name: 'React',
      icon: '/logo/react.png',
    },
    {
      name: 'Redux',
      icon: '/logo/redux.png',
    },
    {
      name: 'Tailwind CSS',
      icon: '/logo/tailwind.png',
    },
    {
      name: 'GSAP',
      icon: '/logo/gsap.png',
    },
    {
      name: 'Framer Motion',
      icon: '/logo/framer-motion.png',
    },
    {
      name: 'Sass',
      icon: '/logo/sass.png',
    },
    {
      name: 'Bootstrap',
      icon: '/logo/bootstrap.svg',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: '/logo/node.png',
    },
    {
      name: 'Express.js',
      icon: '/logo/express.png',
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: '/logo/mysql.svg',
    },
    {
      name: 'MongoDB',
      icon: '/logo/mongodb.svg',
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: '/logo/git.png',
    },
    {
      name: 'Playwright',
      icon: '/logo/playwright.png',
    },
    {
      name: 'GitLab',
      icon: '/logo/gitlab.svg',
    },
    {
      name: 'Bitbucket',
      icon: '/logo/bitbucket.svg',
    },
    {
      name: 'Jira',
      icon: '/logo/jira.svg',
    },
  ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'Evoxt',
    slug: 'evoxt',
    liveUrl: 'https://evoxt.vercel.app/',
    year: 2025,
    description: `
      A professional UI reconstruction project aimed at mastering modern frontend development techniques by cloning the Evoxt cloud platform. This project focuses on high-performance design, complex dashboard layouts, and seamless user experiences. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🏠 Homepage: Precision-crafted hero section featuring dynamic headlines and high-conversion call-to-action elements</li>
        <li>🖥️ VM Management: Integrated dashboard with real-time performance monitoring, network configuration, and server controls</li>
        <li>🛡️ Firewall & Security: Intuitive interfaces for managing security rules and backup strategies</li>
        <li>📄 Professional Forms: User-friendly registration and contact systems designed for commercial standards</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
      </ul><br/>
      
      Technical Achievements:
      <ul>
        <li>🎯 Mastered complex state management and UI state synchronization</li>
        <li>🎨 Leveraged Ant Design and Tailwind CSS for rapid, scalable component development</li>
        <li>⚡ Optimized build performance and asset delivery using Vite</li>
        <li>📐 Implemented professional folder structure and clean code practices</li>
      </ul>
      `,
    role: `
      Frontend Developer <br/>
      Lead the UI/UX implementation and technical architecture:
      <ul>
        <li>✅ UI Architecture: Structured the project using Vite and React for optimal development speed</li>
        <li>🎨 Visual Design: Implemented a dark-themed, data-heavy dashboard using Ant Design and custom Tailwind styles</li>
        <li>🔄 Component Logic: Developed complex management interfaces for VM control and monitoring</li>
        <li>📱 Cross-Device Support: Guaranteed a consistent user experience with advanced responsive design techniques</li>
        <li>🚀 Form Optimization: Built robust validation and submission flows for user registration</li>
      </ul>
      `,
    techStack: ['ReactJS', 'Ant Design', 'Vite', 'Tailwind CSS', 'TypeScript'],
    thumbnail: '/projects/thumbnail/evoxt.png',
    longThumbnail: '/projects/long/evoxt.png',
    images: [
      '/projects/images/evoxt-1.png',
      '/projects/images/evoxt-2.png',
    ],
  },
];

export const MY_EXPERIENCE = [
  {
    title: 'Frontend Developer',
    company: 'TechLead',
    duration: 'April 2025 - Present',
  },
  {
    title: 'Frontend Developer (Intern)',
    company: '44+ Technologies',
    duration: 'December 2024 - March 2025',
  },
];
