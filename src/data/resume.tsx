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
  avatarUrl: "/me.png",
  skills: [
    { name: "C++" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "TailwindCSS" },
    { name: "HTML/CSS" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Problem Solving" },
    { name: "DSA" },
    { name: "System Design" },
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
      handle: "YOUR_HANDLE",
      url: "https://www.codechef.com/users/YOUR_HANDLE",
    },
    {
      platform: "Codeforces",
      handle: "YOUR_HANDLE",
      url: "https://codeforces.com/profile/YOUR_HANDLE",
    },
    {
      platform: "LeetCode",
      handle: "YOUR_HANDLE",
      url: "https://leetcode.com/YOUR_HANDLE",
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
        url: "https://github.com/YOUR_GITHUB_USERNAME",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/YOUR_HANDLE",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/YOUR_HANDLE",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/YOUR_HANDLE",
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
      company: "XYZ Tech Club",
      href: "#",
      badges: [],
      location: "University",
      title: "Technical Lead",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "Leading the technical team, organizing workshops, mentoring juniors in web development and competitive programming. [PLACEHOLDER — update with real details]",
    },
    {
      company: "ABC Society",
      href: "#",
      badges: [],
      location: "University",
      title: "Core Member",
      logoUrl: "",
      start: "2023",
      end: "2024",
      description:
        "Contributed to event planning, content creation, and community building. Helped organize tech talks and coding contests. [PLACEHOLDER — update with real details]",
    },
    {
      company: "DEF Fest",
      href: "#",
      badges: [],
      location: "University",
      title: "Event Coordinator",
      logoUrl: "",
      start: "2023",
      end: "2023",
      description:
        "Coordinated logistics and execution for the annual tech fest. Managed a team of volunteers and ensured smooth event delivery. [PLACEHOLDER — update with real details]",
    },
  ],
  education: [
    {
      school: "MMMUT, Gorakhpur",
      href: "https://mmmut.ac.in",
      degree: "B.Tech — [Your Branch]",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
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
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MMMUT.xyz",
      href: "https://mmmut.xyz",
      dates: "2024",
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
          href: "https://mmmut.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
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
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Summit",
      dates: "[YEAR] — [LOCATION]",
      location: "TBD",
      description:
        "Attended the AI Summit to explore cutting-edge developments in artificial intelligence, machine learning, and their real-world applications.",
      image: "",
      links: [],
    },
    {
      title: "TCS Hackathon",
      dates: "Participant",
      location: "Online / On-site",
      description:
        "Participated in the TCS-organized hackathon, building solutions under time constraints and collaborating with peers on innovative problem statements.",
      image: "",
      links: [],
    },
    {
      title: "Railway Quiz — Regional Level",
      dates: "Regional Level",
      location: "Gorakhpur",
      description:
        "Competed at the regional level in a general knowledge and railway-themed quiz competition held in Gorakhpur.",
      image: "",
      links: [],
    },
  ],
} as const;
