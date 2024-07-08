import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jyotirmoy Barman",
  initials: "JB",
  location: "Tura, Meghalaya, India",
  locationLink: "https://maps.app.goo.gl/DBxrtkBSwohDbZd87",
  about:
    "Detail-oriented Developer dedicated to building high-quality products.",
  summary:
    "As a Developer, I excel at transforming ideas into successful product launches. I thrive in leading teams and fostering environments where everyone can achieve their best. My current expertise includes TypeScript, React, Next.js, and Go. Additionally, I have extensive experience working remotely with companies across the globe.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64324524?v=4",
  personalWebsiteUrl: "https://jyotirmoy.dev",
  contact: {
    email: "jyotirmoydotdev@gmail.com",
    tel: "+918798162808",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jyotirmoydotdev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jyotirmoydotdev/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jyotirmoydotdev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chandigarh University",
      degree: "Bachelor of Computer Applications",
      start: "2021",
      end: "2024",
    },
    {
      school: "Kendriya Vidyalaya Tura",
      degree: "science stream, HHLC",
      start: "2020",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Loreum DAO",
      link: "https://www.loreum.org",
      badges: ["Remote"],
      title: "Ethereum Engineer",
      logo: "",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "Leading the development of the Loreum platform. Technologies: React, TypeScript, GraphQl.",
    },
    {
      company: "DAO Times",
      link: "https://daotimes.com",
      badges: ["Remote"],
      title: "Technical Writer",
      logo: "",
      start: "Mar 2023",
      end: "June 2023",
      description:
        "Contributed to DAO Times, covering the latest in DeFi and NFTs. Researched, wrote, and collaborated with editors for engaging content.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "GraphQL",
    "Golang",
    "Solidity",
    "TailwindCss"
  ],
  projects: [
    {
      title: "Openfy",
      techStack: [
        "Backend Developer",
        "Golang",
        "Gin",
        "Pocketbase",
      ],
      description:
        "Openfy is a self-hosted e-commerce platform built with Go and Gin, providing a flexible and customizable solution for managing products and handling user authentication.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/jyotirmoydotdev/Openfy",
      },
    },
  ],
} as const;
