import type { Metadata } from "next";
import { WorkRow } from "@/components/work-row";
import { portfolioProjects } from "@/content/projects/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products I build and run under iHawk Labs, and client work: QR gift claims, a multi-vendor marketplace, an AI store assistant and more.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Work
      </p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
        Selected work
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted">
        Products I build and run under iHawk Labs — each one live, so you can
        try it.
      </p>
      <div className="mt-10 border-t border-line">
        {portfolioProjects.map((project) => (
          <WorkRow key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
