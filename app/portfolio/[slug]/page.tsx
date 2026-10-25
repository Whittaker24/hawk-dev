import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, portfolioProjects } from "@/content/projects/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.outcome };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} /> All work
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {project.client}, {project.year}
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
        {project.outcome}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="font-mono text-[11px] uppercase tracking-wider text-muted"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {project.links.map((link) => (
          <div key={link.href} className="flex flex-col gap-1">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {link.label} <ArrowUpRight size={16} />
            </a>
            {link.note && (
              <span className="text-xs text-muted">{link.note}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-12 border-t border-line pt-12 md:grid-cols-[3fr_2fr]">
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Overview
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Highlights
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="border-l border-line pl-4 text-sm leading-relaxed text-ink sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.screenshots.length > 0 && (
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Screenshots
          </h2>
          <div className="mt-8 space-y-14">
            {project.screenshots.map((shot) => {
              const tall = shot.height > shot.width;
              return (
                <figure
                  key={shot.src + shot.caption}
                  className={tall ? "mx-auto max-w-xs" : undefined}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes={tall ? "320px" : "(min-width: 1024px) 960px, 100vw"}
                    className={`w-full border border-line ${tall ? "rounded-2xl" : "rounded-lg"}`}
                  />
                  <figcaption className="mt-3 text-sm text-muted">
                    {shot.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
