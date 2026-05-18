import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderKanbanIcon, UserIcon } from "lucide-react";

export const DATA = {
  name: "Varun Pandey",
  gamerTag: "GlitchPanda",
  initials: "VP",
  url: "https://varunpandey.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Building at the intersection of tech and management",
  summary:
    "I'm a developer and builder with a strong foundation in computer science, competitive programming, and full-stack web development. I'm deeply interested in **product thinking** and **tech management** — understanding not just *how* to build, but *what* to build and *why*. When I'm not coding, you'll find me grinding on [Codeforces](https://codeforces.com), exploring business strategy, or working on side projects that solve real problems.",
  avatarUrl: "/images/me2.png",
  avatarUrlDark: "/images/me.png", // TODO: Replace this with your dark theme image path in the public/images folder
  skills: [
    { name: "C++", icon: "c++" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs2" },
    { name: "TailwindCSS", icon: "tailwindcss" },
    { name: "HTML/CSS", icon: "html5" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "Problem Solving", icon: null },
    { name: "DSA", icon: null },
    { name: "System Design", icon: null },
  ],
  interests: [
    "Gaming",
    "Competitive Programming",
    "Reading about Business Strategy",
    "Building side projects",
    "Watching anime",
  ],
  competitiveProgramming: [
    {
      platform: "CodeChef",
      handle: "Varun Pandey",
      url: "https://www.codechef.com/users/brill_olive_88",
    },
    {
      platform: "Codeforces",
      handle: "Varun Pandey",
      url: "https://codeforces.com/profile/var.un.pandey.bly",
    },
    {
      platform: "LeetCode",
      handle: "YOUR_HANDLE",
      url: "https://leetcode.com/u/O4E8XQyUya/",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: FolderKanbanIcon, label: "Projects" },
    { href: "/#about", icon: UserIcon, label: "About" },
    { href: "/blog", icon: NotebookIcon, label: "Case Studies" },
  ],
  contact: {
    email: "varun.pandey.bly@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GlitchPanda-varun",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/varun-pandey2004",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Varun__Pandey_",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/varun_pandey_27/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:varun.pandey.bly@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MMMUT RESO Club",
      href: "https://mmmut.xyz/",
      badges: [],
      location: "Madan Mohan Malaviya University of Technology, Gorakhpur",
      title: "President",
      logoUrl: "https://mmmut.xyz/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwxPhqSMZ%2Flogo.png&w=64&q=75",
      start: "May,2025",
      end: "Present",
      description:
        "Leading the technical team, organizing workshops, mentoring juniors in web development and competitive programming. [PLACEHOLDER — update with real details]",
    },
    {
      company: "Jabrod AI",
      href: "https://jabrod.com",
      badges: [],
      location: "Delhi-Ayodhya",
      title: "Co-Founder & Operations Lead",
      logoUrl: "./images/jab-logo.png",
      start: "Jan, 2026",
      end: "Present",
      description:
        "Contributed to event planning, content creation, and community building. Helped organize tech talks and coding contests. [PLACEHOLDER — update with real details]",
    },
    {
      company: "ICMR AI-RAG Chatbot Project",
      href: "#",
      badges: [],
      location: "MMMUT Gorakhpur",
      title: "Project Lead",
      logoUrl: "/images/icmrlogo.jpg",
      start: "2026",
      end: "202",
      description:
        "Coordinated logistics and execution for the annual tech fest. Managed a team of volunteers and ensured smooth event delivery. [PLACEHOLDER — update with real details]",
    },
  ],
  education: [
    {
      school: "MMMUT, Gorakhpur",
      href: "https://mmmut.ac.in",
      degree: "B.Tech — Information Technology",
      logoUrl: "./images/thumb_mmmut-logo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Class XII — PCM",
      href: "https://www.jbsbareilly.com/",
      degree: "Jingle Bell School, Bareilly",
      logoUrl: "./images/jbs.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Class X",
      href: "https://www.jbsbareilly.com/",
      degree: "Jingle Bell School, Bareilly",
      logoUrl: "/images/jbs.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    
    {
      title: "ICMR AI-RAG Chatbot Project",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Combating Malnutrition using a GenAI powered APP for Asha works in collaboration with ICMR, Gorakhpur",
      technologies: [
        
        "Flutter",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GlitchPanda-varun/IMCR-Chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/IMCR.png",
      video: "",
    },
    {
      title: "Mini-RAG Chatbot",
      href: "https://mmmut.xyz",
      dates: "2026",
      active: true,
      description:
        "A university resource and utility website for MMMUT students. Access notes, previous year papers, faculty info, and other academic tools — all in one place, built by students for students.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://varuns-minirag.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GlitchPanda-varun/Mini-Rag-Chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/rag.png",
      video: "",
    },
    
    {
      title: "Campus Connect",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "A social media app for students to connect with each other.",
      technologies: [

        "React Native",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source-Private",
          href: "https://github.com/GlitchPanda-varun/WSUP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/rag.png",
      video: "",
    },

    {
      title: "MMMUT.xyz",
      href: "https://mmmut.xyz",
      dates: "2024-25",
      active: true,
      description:
        "A university resource and utility website for MMMUT students. Access notes, previous year papers, faculty info, and other academic tools — all in one place, built by students for students.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "MongoDB"
      ],
      links: [
        {
          type: "Website",
          href: "https://mmmut.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/image.png",
      video: "",
    },
    {
      title: "Devbhoomi",
      href: "https://devbhoomi-six.vercel.app",
      dates: "2024",
      active: true,
      description:
        "A web platform dedicated to discovering the beauty, culture, and hidden gems of Uttarakhand. Explore local destinations, plan trips, and dive into the rich heritage of Dev Bhoomi — the land of the gods.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://devbhoomi-six.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://devbhoomi-six.vercel.app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/devbhoomi.png",
      video: "",
    },
    
    {
      title: "Terminal Portfolio",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "A terminal-based version of this portfolio — navigate my work, skills, and projects entirely through a command-line interface in the browser.",
      technologies: [
        "React",
        "TypeScript",
        "XTerm.js",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/terminal-coming-soon.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "India AI Impact Summit 2026",
      dates: "15/02/2026 — 20/02/2026",
      location: "New Delhi",
      description:
        "Represented my Startup Jabrod.com at the AI Summit to explore cutting-edge developments in artificial intelligence, machine learning, and their real-world applications.",
      image: "https://d19ob9sqegt2wc.cloudfront.net/stage/uploads/ai_impact_logo_6365e5e12a.png",
      links: [],
    },
    {
      title: "TCS Hackathon",
      dates: "Participant",
      location: "MPIT, Gorakhpur",
      description:
        "Top 100 position in the TCS-organized hackathon, building solutions under time constraints and collaborating with peers on innovative problem statements.",
      image: "./images/hackathon.png",
      links: [],
    },
    {
      title: "Railway Quiz - Regional Level",
      dates: "Nov 2025",
      location: "Gorakhpur",
      description:
        "Secured winning position in an inter-college General Aptitude & GK Quiz Competition organized by Indian Railways, Gorakhpur.",
      image: "/images/WhatsApp Image 2025-10-29 at 8.38.19 PM.jpeg",
      links: [],
    },
  ],
} as const;
