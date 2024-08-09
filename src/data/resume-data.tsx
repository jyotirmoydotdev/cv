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
    "As a Developer, I excel at transforming ideas into successful product launches. My current expertise includes TypeScript, React, Next.js, and Go. Additionally, I have extensive experience working remotely with companies across the globe.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64324524",
  personalWebsiteUrl: "https://jyotirmoy.dev",
  contact: {
    email: "jyotirmoydotdev@gmail.com",
    tel: null,
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
    {
      title: "Blog-App",
      techStack: [
        "Next.js",
        "MongoDB",
        "Vercel",
      ],
      description:
        "Blog application built with Next.js and MongoDB. The app includes a dashboard for managing posts and viewing a list of subscribers.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/jyotirmoydotdev/blog-app",
      },
    },
    {
      title: "Ethereum-Reader",
      techStack: [
        "React.js",
        "Tailwind",
        "",
      ],
      description:
        "This project provides a user-friendly website to access and analyze the latest block data and transaction information from the Ethereum mainnet.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/jyotirmoydotdev/ethereum-reader",
      },
    }
  ],
} as const;
