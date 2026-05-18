/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Responsibility", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Experiences", href: "#hackathons" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  // Scroll-position-based active section detection
  const updateActiveSection = useCallback(() => {
    if (isClickScrolling.current) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const container = isDesktop
      ? document.getElementById("main-content")
      : null;

    const scrollTop = container ? container.scrollTop : window.scrollY;
    // Offset: how far from the top of the scroll container a section must be to count as "active"
    const offset = isDesktop ? 120 : 100;

    let current = "about";

    for (const item of NAV_ITEMS) {
      const id = item.href.slice(1);
      const el = document.getElementById(id);
      if (!el) continue;

      // Get element position relative to the scroll container
      let elTop: number;
      if (container) {
        elTop = el.offsetTop - container.offsetTop;
      } else {
        elTop = el.getBoundingClientRect().top + window.scrollY;
      }

      if (scrollTop >= elTop - offset) {
        current = id;
      }
    }

    setActiveSection(current);
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const container = isDesktop
      ? document.getElementById("main-content")
      : null;
    const scrollTarget = container || window;

    // Throttled scroll handler using rAF
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    // Initial check
    updateActiveSection();

    // Re-init on resize/orientation change
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaChange = () => {
      // Clean up old listener
      scrollTarget.removeEventListener("scroll", onScroll);
      // The effect will re-run due to the dependency, but we also need to handle
      // the case where the scroll target changes
      const newIsDesktop = mediaQuery.matches;
      const newContainer = newIsDesktop
        ? document.getElementById("main-content")
        : null;
      const newScrollTarget = newContainer || window;
      newScrollTarget.addEventListener("scroll", onScroll, { passive: true });
      updateActiveSection();
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [updateActiveSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const container = isDesktop
      ? document.getElementById("main-content")
      : null;

    if (!el) return;

    // Prevent scroll handler from fighting with the click
    isClickScrolling.current = true;
    setActiveSection(id);

    if (container) {
      const top = el.offsetTop - container.offsetTop - 24;
      container.scrollTo({ top, behavior: "smooth" });
    } else {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 80; // navbar height offset
      window.scrollTo({ top, behavior: "smooth" });
    }

    // Re-enable scroll tracking after animation completes
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
      updateActiveSection();
    }, 800);
  };

  return (
    <aside className="sidebar-aside w-full lg:w-[420px] lg:shrink-0 lg:sticky lg:top-[var(--navbar-height,56px)] lg:h-[calc(100vh-var(--navbar-height,56px))] flex flex-col justify-between px-4 sm:px-6 py-6 sm:py-8 lg:px-10 lg:py-12 lg:border-r lg:border-border/40 lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Top: Profile */}
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Panda + Name */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={DATA.avatarUrl}
            alt={DATA.name}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 rounded-full object-cover ring-2 ring-border shadow-lg"
          />
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
              {DATA.name}
            </h1>
            <span
              className="font-mono text-xs sm:text-sm text-muted-foreground/80"
              style={{ color: "#6c63ff" }}
            >
              @{DATA.gamerTag}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed max-w-[320px]">
          {DATA.description}
        </p>

        {/* Navigation — desktop only */}
        <nav
          className="hidden lg:flex flex-col gap-1 mt-4"
          aria-label="Section navigation"
        >
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
                    isActive
                      ? "w-16"
                      : "w-8 group-hover:w-12 bg-muted-foreground group-hover:bg-foreground"
                  )}
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social links */}
      {/* <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 lg:mt-0">
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
      </div> */}
    </aside>
  );
}
