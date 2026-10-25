import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects/projects";

export function WorkRow({ project }: { project: Project }) {
  const meta = [project.client, project.year !== "—" ? project.year : null]
    .filter(Boolean)
    .join(", ");

  const inner = (
    <>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
            {project.title}
          </h3>
          {project.placeholder && (
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
              Coming soon
            </span>
          )}
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {meta ? `${meta} — ${project.outcome}` : project.outcome}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <div className="hidden flex-wrap justify-end gap-2 sm:flex">
          {project.stack.map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] uppercase tracking-wider text-muted"
            >
              {item}
            </span>
          ))}
        </div>
        <ArrowRight
          size={18}
          className="text-muted transition-colors group-hover:text-accent"
        />
      </div>
    </>
  );

  const rowClass =
    "group flex flex-col gap-4 border-b border-line py-8 transition-colors sm:flex-row sm:items-center sm:justify-between";

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`${rowClass} hover:border-accent/40`}
    >
      {inner}
    </Link>
  );
}
