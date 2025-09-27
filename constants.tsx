
import React from 'react';
import type { Project, SkillCategory, EducationItem, Strength } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Design & Prototyping',
    skills: [
      { name: 'Wireframing', level: 95 },
      { name: 'High-Fidelity Mockups', level: 98 },
      { name: 'Interactive Prototypes', level: 92 },
    ],
  },
  {
    title: 'UI Design',
    skills: [
      { name: 'Mobile, Web, Tablet Design', level: 96 },
      { name: 'Typography & Color Theory', level: 94 },
      { name: 'Iconography', level: 90 },
    ],
  },
  {
    title: 'UX & Interaction',
    skills: [
      { name: 'Micro-interactions', level: 88 },
      { name: 'User Flows', level: 95 },
      { name: 'Usability-Focused Navigation', level: 93 },
    ],
  },
  {
    title: 'Component & System Design',
    skills: [
      { name: 'Reusable Components', level: 97 },
      { name: 'Design Systems', level: 91 },
      { name: 'Responsive Layouts', level: 99 },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 2,
    title: 'ServiceHub – Local Service Booking',
    description: 'A platform to connect users with local service providers.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&h=400&fit=crop',
    tags: ['Web App', 'UI/UX', 'Prototyping'],
    goal: 'To simplify the process of finding and booking reliable local services, from plumbing to event planning, through an intuitive and trustworthy platform.',
    features: ['Service provider search & filtering', 'In-app booking and scheduling', 'User reviews and ratings', 'Secure payment gateway'],
  },
  {
    id: 3,
    title: 'Restaurant Admin Dashboard',
    description: 'A comprehensive dashboard for managing restaurant operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop',
    tags: ['Dashboard', 'Data Viz', 'Figma'],
    goal: 'To empower restaurant managers with a centralized tool to monitor sales, manage orders, track inventory, and analyze customer data for informed decision-making.',
    features: ['Real-time sales analytics', 'Order management system', 'Inventory tracking', 'Customer relationship management (CRM)'],
  },
  {
    id: 4,
    title: 'KFC Website Redesign',
    description: 'A modern and user-friendly redesign concept for the KFC website.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&h=400&fit=crop',
    tags: ['Web Design', 'Redesign', 'Concept'],
    goal: 'To enhance the online ordering experience for KFC customers with a visually appealing, responsive, and intuitive website design that boosts conversions.',
    features: ['Streamlined ordering flow', 'Interactive menu with customization', 'Geolocation for store locator', 'Promotions and loyalty program integration'],
  },
  {
    id: 5,
    title: 'Netflix Clone App',
    description: 'A UI concept for a feature-rich Netflix clone.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&h=400&fit=crop',
    tags: ['Mobile App', 'UI Design', 'Clone'],
    goal: 'To replicate and enhance the core user interface and experience of the Netflix mobile application, focusing on fluid navigation and content discovery.',
    features: ['Browse and search catalog', 'User profiles', 'Continue watching list', 'Video player interface'],
  },
  {
    id: 6,
    title: 'Next Gen Virtual Reality UI',
    description: 'A futuristic UI concept for virtual reality interfaces.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&h=400&fit=crop',
    tags: ['VR', 'Concept', 'UI'],
    goal: 'To explore innovative interaction patterns and visual languages for next-generation VR systems, prioritizing immersion, comfort, and intuitive control.',
    features: ['3D spatial navigation', 'Gesture-based controls', 'Holographic displays', 'Contextual information overlays'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.E. in Computer Science',
    institution: 'KSR College of Engineering',
    location: 'Tiruchengode',
    year: '2019 - 2023',
  },
  {
    degree: 'HSC',
    institution: 'Senthil Matric Hr. Sec School',
    location: 'Adhiyamankottai',
    year: '2018 - 2019',
  },
  {
    degree: 'SSLC',
    institution: 'Senthil Matric Hr. Sec School',
    location: 'Adhiyamankottai',
    year: '2016 - 2017',
  },
];


const UserCentricIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const DetailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ProblemSolvingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const VersatilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
);


export const STRENGTHS_DATA: Strength[] = [
    {
        title: 'User-Centered Design',
        description: 'Deeply committed to creating designs that are intuitive, accessible, and genuinely meet user needs.',
        icon: <UserCentricIcon />
    },
    {
        title: 'Attention to Detail',
        description: 'Meticulous about every pixel, ensuring polished and professional results in all projects.',
        icon: <DetailIcon />
    },
    {
        title: 'Creative Problem-Solving',
        description: 'Thrives on finding innovative and elegant solutions to complex UX challenges.',
        icon: <ProblemSolvingIcon />
    },
    {
        title: 'Versatility',
        description: 'Adaptable across various platforms, from mobile apps and websites to interactive prototypes.',
        icon: <VersatilityIcon />
    }
];

export const SOCIAL_LINKS = {
    behance: 'https://www.behance.net/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
};
