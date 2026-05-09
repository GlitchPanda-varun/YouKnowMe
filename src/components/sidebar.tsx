/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useCallback } from "react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Events", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length > 0) {
      setActiveSection(visible[0].target.id);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: document.getElementById("main-content"),
      rootMargin: "-10% 0px -60% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.5],
    });

    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [handleObserver]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    const container = document.getElementById("main-content");
    if (el && container) {
      const top = el.offsetTop - 24;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <aside className="w-full lg:w-[420px] lg:shrink-0 lg:sticky lg:top-[calc(var(--navbar-height,80px))] lg:h-[calc(100vh-var(--navbar-height,80px))] flex flex-col justify-between px-6 py-10 lg:px-10 lg:py-12 lg:border-r lg:border-border/40">
      {/* Top: Profile */}
      <div className="flex flex-col gap-6">
        {/* Panda + Name */}
        <div className="flex items-center gap-4">
          <img
            src={DATA.avatarUrl}
            alt={DATA.name}
            className="w-20 h-20 lg:w-24 lg:h-24 shrink-0 rounded-full object-cover ring-2 ring-border shadow-lg"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
              {DATA.name}
            </h1>
            <span
              className="font-mono text-sm text-muted-foreground/80"
              style={{ color: "#6c63ff" }}
            >
              @{DATA.gamerTag}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-[320px]">
          {DATA.description}
        </p>

        {/* Navigation — desktop only */}
        <nav className="hidden lg:flex flex-col gap-1 mt-4" aria-label="Section navigation">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "group flex items-center gap-3 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "h-px bg-foreground transition-all duration-300",
                    isActive ? "w-16" : "w-8 group-hover:w-12 bg-muted-foreground group-hover:bg-foreground"
                  )}
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social links */}
      <div className="flex items-center gap-4 mt-8 lg:mt-0">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={name}
              >
                <IconComponent className="size-5" />
              </Link>
            );
          })}
      </div>
    </aside>
  );
}
