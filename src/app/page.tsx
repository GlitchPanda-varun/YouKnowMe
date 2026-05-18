/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/sidebar";
import StackIcon, { IconName } from "tech-stack-icons";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-var(--navbar-height,56px))] lg:overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Scrollable Content */}
      <main
        id="main-content"
        className="flex-1 lg:h-[calc(100vh-var(--navbar-height,56px))] lg:overflow-y-auto"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <section id="about" className="py-8 sm:py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-3 sm:gap-y-4">
              {/* Mobile Social Profiles */}
              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <div className="lg:hidden mb-4 flex flex-col gap-4 p-4 sm:p-5 bg-card border border-border rounded-2xl shadow-sm">
                  <h3 className="text-sm sm:text-base font-medium text-foreground/80">Social Profiles</h3>
                  <div className="flex items-center gap-4 sm:gap-6">
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
                            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                          >
                            <IconComponent className="size-6 sm:size-7 drop-shadow-sm" />
                            <span className="text-[10px] sm:text-xs font-medium">{name === 'X' ? 'X (Twitter)' : name}</span>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-lg sm:text-xl font-bold">About</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="prose max-w-full text-pretty font-sans text-sm sm:text-base leading-relaxed text-muted-foreground dark:prose-invert">
                  <Markdown>
                    {DATA.summary}
                  </Markdown>
                </div>
              </BlurFade>
              

            </div>
          </section>

          <section id="skills" className="py-8 sm:py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-3 sm:gap-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-lg sm:text-xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 6 + id * 0.03}>
                    <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-7 sm:h-8 w-fit px-3 sm:px-4 flex items-center gap-2">
                      {skill.icon && (
                        <span className="size-4 flex-none flex items-center">
                          <StackIcon name={skill.icon as IconName} className="w-full h-full" />
                        </span>
                      )}
                      <span className="text-foreground text-xs sm:text-sm font-medium">{skill.name}</span>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="py-8 sm:py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-4 sm:gap-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-lg sm:text-xl font-bold">Education</h2>
              </BlurFade>
              <div className="flex flex-col gap-6 sm:gap-8">
                {DATA.education.map((education, index) => (
                  <BlurFade
                    key={education.school}
                    delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                  >
                    <Link
                      href={education.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 justify-between group"
                    >
                      <div className="flex items-center gap-x-3 flex-1 min-w-0">
                        {education.logoUrl ? (
                          <img
                            src={education.logoUrl}
                            alt={education.school}
                            className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                          />
                        ) : (
                          <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                        )}
                        <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                          <div className="font-semibold text-sm sm:text-base leading-none flex items-center gap-2">
                            {education.school}
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                          </div>
                          <div className="font-sans text-xs sm:text-sm text-muted-foreground">
                            {education.degree}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs tabular-nums text-muted-foreground text-right flex-none">
                        <span>
                          {education.start} - {education.end}
                        </span>
                      </div>
                    </Link>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="py-8 sm:py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-4 sm:gap-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-lg sm:text-xl font-bold">Positions of Responsibility</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 10}>
                <WorkSection />
              </BlurFade>
            </div>
          </section>

          <section id="projects" className="py-8 sm:py-12 lg:py-20">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <ProjectsSection />
            </BlurFade>
          </section>

          <section id="hackathons" className="py-8 sm:py-12 lg:py-20">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <HackathonsSection />
            </BlurFade>
          </section>

          <section id="interests" className="py-8 sm:py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-4 sm:gap-y-6">
              <div className="flex min-h-0 flex-col gap-y-3 sm:gap-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 13}>
                  <h2 className="text-lg sm:text-xl font-bold">Interests & Hobbies</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {DATA.interests.map((interest, id) => (
                    <BlurFade key={interest} delay={BLUR_FADE_DELAY * 13.5 + id * 0.03}>
                      <Badge variant="outline" className="text-xs sm:text-sm font-medium border border-border h-7 sm:h-8 px-3 sm:px-4">
                        {interest}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>

              <div className="flex min-h-0 flex-col gap-y-3 sm:gap-y-4 mt-2 sm:mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 14}>
                  <h2 className="text-lg sm:text-xl font-bold">Competitive Programming</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {DATA.competitiveProgramming.map((cp, id) => (
                    <BlurFade key={cp.platform} delay={BLUR_FADE_DELAY * 14.5 + id * 0.03}>
                      <Link
                        href={cp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 border border-border rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 bg-background hover:bg-muted transition-colors group"
                      >
                        <span className="font-semibold text-xs sm:text-sm">{cp.platform}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">@{cp.handle}</span>
                        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </Link>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-8 sm:py-12 lg:py-20 pb-16 sm:pb-24">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <ContactSection />
            </BlurFade>
          </section>
        </div>
      </main>
    </div>
  );
}
