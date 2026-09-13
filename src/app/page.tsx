"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Code,
  Book,
  Bookmarks,
  Envelope,
  Phone,
  XLogo,
  YoutubeLogo,
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
} from "@phosphor-icons/react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  url: string;
  date?: string;
};

const projects: Project[] = [
  {
    name: "Excalimotion",
    tagline: "Excalidraw Animation Tool",
    description: "Bring your Excalidraw sketches to life with smooth, exportable animations.",
    logo: "/exclimotion.png",
    url: "https://excalimotion.com",
  },
  {
    name: "TracVid",
    tagline: "Video Reframing Tool",
    description: "Reframe videos for different aspect ratios. Perfect for repurposing content across platforms.",
    logo: "/tracvid.png",
    url: "https://tracvid.anmism.com",
  },
  {
    name: "Twosemi",
    tagline: "Productivity Suite",
    description: "The only productivity tool you need. Tasks, notes, and workflows in one place.",
    logo: "/twosemi.png",
    url: "https://twosemi.anmism.com",
  },
  {
    name: "PptxGenJS",
    tagline: "Open Source Contributor",
    description: "Added animation support to the popular PowerPoint generation library.",
    logo: "/pptxgenjs.png",
    url: "https://pptxgenjs-animation.vercel.app/",
  },
  {
    name: "Hashtag Scraper",
    tagline: "Chrome Extension",
    description: "Scrape and analyze hashtags from social platforms. Available on Chrome Web Store.",
    logo: "/hashtagscraper.png",
    url: "https://chromewebstore.google.com/detail/hashtag-scraper/lkjglfpchhgefmooomhbdipbppabdpii",
  },
  {
    name: "Google Business Scraper",
    tagline: "Lead Generation Tool",
    description: "Scrape unlimited business data from Google Maps. Open source and free to use.",
    logo: "/googlescraper.png",
    url: "https://github.com/BapunHansdah/google-business-scraper",
    
  },
];

const experience: Project[] = [
  {
    name: "Agma360",
    tagline: "B2B Agentic AI SaaS",
    description: "Fully autonomous AI marketer that runs campaigns end-to-end without human intervention.",
    logo: "/agma360.png",
    url: "https://agma360.com",
    date: "Apr 2025 - Present",
  },
  {
    name: "Shotzspot",
    tagline: "Influencer Marketing",
    description: "Platform connecting brands with influencers to run impactful marketing campaigns.",
    logo: "/shotzspot.png",
    url: "https://shotzspot.com",
    date: "Mar 2025 - Jan 2026",
  },
  {
    name: "Unifill AI",
    tagline: "AI Automation Agency",
    description: "Helping businesses automate workflows and scale with custom AI solutions. $25k+ revenue.",
    logo: "/unifillai.png",
    url: "https://unifillai.com",
    date: "Sep 2023 - Mar 2025",
  },
  {
    name: "Dogswag",
    tagline: "Dog Juice Platform",
    description: "E-commerce platform for healthy dog beverages and treats.",
    logo: "/dogswag.jpg",
    url: "https://barkybrews.com",
    date: "Feb 2023 - Sep 2023",
  },
];

function TabsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "experience">("projects");

  const items = activeTab === "projects" ? projects : experience;

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors ${
            activeTab === "projects"
              ? "bg-[#FBDAB3] text-gray-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors ${
            activeTab === "experience"
              ? "bg-[#FBDAB3] text-gray-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Experience
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={item.logo}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-700">{item.name}</h3>
                {"date" in item && (
                  <p className="text-gray-400 text-xs">{item.date}</p>
                )}
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-2">{item.tagline}</p>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f4] p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[350px_1fr] gap-12">
        {/* Left Column - Profile */}
        <div className="flex flex-col">
          {/* Profile Image */}
          <div className="relative w-44 h-44 mb-6">
            <div className="absolute inset-0 bg-[#FBDAB3] rounded-full" />
            <Image
              src="/bapun.png"
              alt="Anmism"
              width={176}
              height={176}
              className="relative rounded-full object-cover"
              priority
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <p className="text-gray-500">@anmism</p>
            <h1 className="text-4xl font-bold text-gray-700">Bapun Hansdah</h1>
          </div>

          {/* Location & Info */}
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
            <span className="flex items-center gap-1">
              <MapPin size={16} weight="fill" /> India
            </span>
            <span className="flex items-center gap-1">
              <Code size={16} weight="bold" /> Shipping since &apos;21
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl font-semibold text-gray-700 mb-1">
            I take ideas from 0→1
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Cofounder & CTO · $25k+ revenue startup
          </p>

          {/* Links */}
          {/* <div className="flex flex-col gap-2 mb-4">
            <a href="#" className="text-gray-700 hover:underline flex items-center gap-2">
              <Book size={18} weight="fill" /> My blog
            </a>
            <a href="#" className="text-gray-700 hover:underline flex items-center gap-2">
              <Bookmarks size={18} weight="fill" /> Bookmarks
            </a>
          </div> */}

          {/* Bio */}
          <p className="text-gray-600 mb-4">
            Got an idea? Let&apos;s make it real.
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-2 mb-6">
            <a href="mailto:bapunhansdah777@gmail.com" className="text-gray-700 hover:underline text-sm flex items-center gap-2">
              <Envelope size={16} weight="fill" /> bapunhansdah777@gmail.com
            </a>
            <a href="tel:+918328821185" className="text-gray-700 hover:underline text-sm flex items-center gap-2">
              <Phone size={16} weight="fill" /> +91 8328821185
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-auto pt-8">
            <a href="https://x.com/bapunhansdah7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
              <XLogo size={24} weight="fill" />
            </a>
            <a href="https://www.youtube.com/@anmism" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
              <YoutubeLogo size={24} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/bapun-hansdah/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
              <LinkedinLogo size={24} weight="fill" />
            </a>
            <a href="https://www.instagram.com/heyanmism/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
              <InstagramLogo size={24} weight="fill" />
            </a>
            <a href="https://github.com/BapunHansdah" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors">
              <GithubLogo size={24} weight="fill" />
            </a>
          </div>
        </div>

{/* Right Column - Tabs */}
        <TabsSection />
      </div>
    </div>
  );
}
