import Link from "next/link";
import { WorkRow } from "@/components/work-row";
import { getFeaturedProjects } from "@/content/projects/projects";
import { getPosts } from "@/lib/posts";
import { deliverables, site } from "@/lib/site";
import { format } from "date-fns";

export default function Home() {
  const featured = getFeaturedProjects();
  const posts = getPosts().slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,_rgba(8,42,73,0.7),_transparent_62%)]"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
          <p className="text-sm text-muted">
            {site.owner} — {site.role}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-6xl">
            I ship ecommerce, product platforms, and{" "}
            <span className="font-mono text-[0.86em] text-accent">
              AI agents
            </span>{" "}
            that teams can actually run.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.location}. Build and delivery, not just code — from the first
            brief through launch.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
            >
              See work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            What I deliver
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            Product, commerce, agents, and the path to release.
          </h2>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
            {deliverables.map((item) => (
              <article key={item.title} className="bg-canvas p-6 sm:p-8">
                <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                Products I build and run.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden text-sm text-muted transition-colors hover:text-accent sm:inline"
            >
              All work
            </Link>
          </div>
          <div className="mt-4 border-t border-line">
            {featured.map((project) => (
              <WorkRow key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Writing
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                Notes on delivery and build.
              </h2>
            </div>
            <Link
              href="/posts"
              className="hidden text-sm text-muted transition-colors hover:text-accent sm:inline"
            >
              All writing
            </Link>
          </div>
          <div className="mt-10 border-t border-line">
            {posts.map((post) => {
              const date = new Date(post.date);
              const formatted = Number.isNaN(date.getTime())
                ? ""
                : format(date, "MMM yyyy");

              return (
                <Link
                  key={post.id}
                  href={`/posts/${post._sys.breadcrumbs.join("/")}`}
                  className="group flex flex-col gap-2 border-b border-line py-6 transition-colors hover:border-accent/40 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-medium text-ink group-hover:text-accent">
                      {post.title}
                    </h3>
                    {post.subtitle && (
                      <p className="mt-1 text-sm text-muted">{post.subtitle}</p>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {formatted}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
            Have a product, a store, or an agent to ship?
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            I take work from brief to something a team can run. {site.location}.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
