"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
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
    name: "Screenzo",
    tagline: "Screen recording with intent",
    description:
      "Record the real work, guide attention with smooth cursor motion and overlays, export a polished demo people can follow.",
    logo: "/screenzo.png",
    url: "https://screenzo.anmism.com",
  },
  {
    name: "Excalimotion",
    tagline: "Excalidraw animation tool",
    description: "Bring your Excalidraw sketches to life with smooth, exportable animations.",
    logo: "/exclimotion.png",
    url: "https://excalimotion.com",
  },
  {
    name: "Tasvera",
    tagline: "Create reels from videos",
    description: "Convert long videos into short, engaging reels for social media.",
    logo: "/tasvera.png",
    url: "https://tasvera.anmism.com",
  },
  {
    name: "Sketchmark",
    tagline: "Motion graphics with JavaScript",
    description:
      "A pure 2D render kernel for animated visuals. Motion graphics tool for your AI agent.",
    logo: "/sketchmark.png",
    url: "https://sketchmark.dev",
  },
  {
    name: "Twosemi",
    tagline: "Productivity suite",
    description: "The only productivity tool you need. Tasks, notes, and workflows in one place.",
    logo: "/twosemi.png",
    url: "https://twosemi.anmism.com",
  },
  {
    name: "Cliplocal",
    tagline: "yt-dlp browser extension",
    description: "Backend-less YouTube downloader that runs entirely in your browser.",
    logo: "/cliplocal.png",
    url: "https://cliplocal.anmism.com",
  },
  {
    name: "PptxGenJS",
    tagline: "Open source contribution",
    description: "Added animation support to the popular PowerPoint generation library.",
    logo: "/pptxgenjs.png",
    url: "https://pptxgenjs-animation.vercel.app/",
  },
  {
    name: "Hashtag Scraper",
    tagline: "Chrome extension",
    description: "Scrape and analyze hashtags from social platforms. Available on the Chrome Web Store.",
    logo: "/hashtagscraper.png",
    url: "https://chromewebstore.google.com/detail/hashtag-scraper/lkjglfpchhgefmooomhbdipbppabdpii",
  },
];

const experience: Project[] = [
  {
    name: "Agma360",
    tagline: "B2B agentic AI SaaS",
    description:
      "Fully autonomous AI marketer that runs campaigns end-to-end without human intervention.",
    logo: "/agma360.png",
    url: "https://agma360.com",
    date: "Apr 2025 – Present",
  },
  {
    name: "Shotzspot",
    tagline: "Influencer marketing",
    description:
      "Platform connecting brands with influencers to run impactful marketing campaigns.",
    logo: "/shotzspot.png",
    url: "https://shotzspot.com",
    date: "Mar 2025 – Jan 2026",
  },
  {
    name: "Unifill AI",
    tagline: "AI automation agency",
    description:
      "Helping businesses automate workflows and scale with custom AI solutions. $25k+ revenue.",
    logo: "/unifillai.png",
    url: "https://unifillai.com",
    date: "Sep 2023 – Mar 2025",
  },
  {
    name: "Dogswag",
    tagline: "Dog juice platform",
    description: "E-commerce platform for healthy dog beverages and treats.",
    logo: "/dogswag.jpg",
    url: "https://barkybrews.com",
    date: "Feb 2023 – Sep 2023",
  },
];

const socials = [
  { label: "X", href: "https://x.com/bapunhansdah7", Icon: XLogo },
  { label: "YouTube", href: "https://www.youtube.com/@anmism", Icon: YoutubeLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bapun-hansdah/", Icon: LinkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/heyanmism/", Icon: InstagramLogo },
  { label: "GitHub", href: "https://github.com/BapunHansdah", Icon: GithubLogo },
];

type Tab = "projects" | "experience";

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: "projects", label: "Projects", count: projects.length },
  { id: "experience", label: "Experience", count: experience.length },
];

function Row({ item }: { item: Project }) {
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group -mx-3 flex gap-4 rounded-2xl px-3 py-4 transition-colors duration-200 hover:bg-hover"
      >
        <Image
          src={item.logo}
          alt=""
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-xl object-cover ring-1 ring-black/5"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="flex items-center gap-1.5 text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink">
              {item.name}
              <ArrowUpRight
                size={14}
                weight="bold"
                aria-hidden
                className="text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </h3>
            {item.date && (
              <span className="shrink-0 text-[13px] tabular-nums text-muted">{item.date}</span>
            )}
          </div>
          <p className="text-sm text-muted">{item.tagline}</p>
          <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">
            {item.description}
          </p>
        </div>
      </a>
    </li>
  );
}

function TabsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const items = activeTab === "projects" ? projects : experience;

  return (
    <section aria-label="Work">
      <div
        role="tablist"
        aria-label="Work"
        className="relative mb-6 grid w-fit grid-cols-2 rounded-full bg-hover p-1"
      >
        <span
          aria-hidden
          className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-[0_1px_2px_rgba(24,24,27,0.08),0_0_0_1px_rgba(24,24,27,0.04)] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            activeTab === "experience" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        {tabs.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="work-panel"
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                selected ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 text-[11px] leading-[18px] tabular-nums transition-colors ${
                  selected ? "bg-sun text-ink" : "bg-line text-muted"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <ul
        id="work-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="flex flex-col gap-1"
      >
        {items.map((item) => (
          <Row key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-clip px-6 py-12 md:px-10 md:py-20">
      <div aria-hidden className="dot-grid dot-grid--tl -z-10" />
      <div aria-hidden className="dot-grid dot-grid--br -z-10" />
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[300px_1fr] lg:gap-24">
        {/* Profile */}
        <aside className="flex flex-col md:sticky md:top-20 md:self-start">
          <Image
            src="/bapun.png"
            alt="Portrait of Bapun Hansdah"
            width={112}
            height={112}
            className="mb-8 size-28 rounded-[28px] object-cover"
            priority
          />

          <p className="mb-1 text-sm text-muted">@anmism</p>
          <h1 className="text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] text-ink">
            Bapun
            <br />
            Hansdah
          </h1>

          <p className="mt-6 text-xl font-medium leading-snug tracking-[-0.01em] text-ink">
            I take ideas from{" "}
            <span className="relative isolate inline-block whitespace-nowrap">
              0→1
              <svg
                aria-hidden
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                className="scribble absolute -left-1 bottom-0 -z-10 h-[0.55em] w-[calc(100%+0.5rem)]"
              >
                <path
                  d="M3 13 C 22 7, 45 6, 62 9 S 90 13, 97 7"
                  pathLength={1}
                  fill="none"
                  stroke="var(--sun)"
                  strokeWidth={9}
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Cofounder &amp; CTO of a startup with $25k+ in revenue. Based in India, shipping
            since 2021. Got an idea? Let&apos;s make it real.
          </p>

          <div className="mt-8 flex flex-col gap-2.5 text-[15px]">
            <a
              href="mailto:bapunhansdah777@gmail.com"
              className="group flex w-fit items-center gap-2.5 text-ink"
            >
              <Envelope size={16} weight="regular" className="text-muted" aria-hidden />
              <span className="underline decoration-line decoration-1 underline-offset-4 transition-colors group-hover:decoration-ink">
                bapunhansdah777@gmail.com
              </span>
            </a>
            <a href="tel:+918328821185" className="group flex w-fit items-center gap-2.5 text-ink">
              <Phone size={16} weight="regular" className="text-muted" aria-hidden />
              <span className="underline decoration-line decoration-1 underline-offset-4 transition-colors group-hover:decoration-ink">
                +91 83288 21185
              </span>
            </a>
          </div>

          <ul className="-ml-2 mt-6 flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-hover hover:text-ink"
                >
                  <Icon size={20} weight="fill" />
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Work */}
        <TabsSection />
      </div>
    </main>
  );
}
