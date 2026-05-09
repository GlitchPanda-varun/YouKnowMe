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

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Scrollable Content */}
      <main
        id="main-content"
        className="flex-1 lg:h-[calc(100vh-80px)] lg:overflow-y-auto scroll-smooth"
      >
        <div className="max-w-2xl mx-auto px-6">
          <section id="about" className="py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">About</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                  <Markdown>
                    {DATA.summary}
                  </Markdown>
                </div>
              </BlurFade>
            </div>
          </section>

          <section id="skills" className="py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-4">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                    <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                      <span className="text-foreground text-sm font-medium">{skill.name}</span>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="work" className="py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold">Positions of Responsibility</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <WorkSection />
              </BlurFade>
            </div>
          </section>

          <section id="projects" className="py-12 lg:py-20">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <ProjectsSection />
            </BlurFade>
          </section>

          <section id="education" className="py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-bold">Education</h2>
              </BlurFade>
              <div className="flex flex-col gap-8">
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
                          <div className="font-semibold leading-none flex items-center gap-2">
                            {education.school}
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                          </div>
                          <div className="font-sans text-sm text-muted-foreground">
                            {education.degree}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
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

          <section id="interests" className="py-12 lg:py-20">
            <div className="flex min-h-0 flex-col gap-y-6">
              <div className="flex min-h-0 flex-col gap-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                  <h2 className="text-xl font-bold">Interests & Hobbies</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                  {DATA.interests.map((interest, id) => (
                    <BlurFade key={interest} delay={BLUR_FADE_DELAY * 11.5 + id * 0.05}>
                      <Badge variant="outline" className="text-sm font-medium border border-border h-8 px-4">
                        {interest}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>

              <div className="flex min-h-0 flex-col gap-y-4 mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 12}>
                  <h2 className="text-xl font-bold">Competitive Programming</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-3">
                  {DATA.competitiveProgramming.map((cp, id) => (
                    <BlurFade key={cp.platform} delay={BLUR_FADE_DELAY * 12.5 + id * 0.05}>
                      <Link
                        href={cp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-border rounded-xl px-4 py-2 bg-background hover:bg-muted transition-colors group"
                      >
                        <span className="font-semibold text-sm">{cp.platform}</span>
                        <span className="text-xs text-muted-foreground font-mono">@{cp.handle}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </Link>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="hackathons" className="py-12 lg:py-20">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <HackathonsSection />
            </BlurFade>
          </section>

          <section id="contact" className="py-12 lg:py-20 pb-24">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <ContactSection />
            </BlurFade>
          </section>
        </div>
      </main>
    </div>
  );
}
