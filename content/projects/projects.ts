export type Project = {
  title: string;
  client: string;
  year: string;
  outcome: string;
  stack: string[];
  href?: string;
  featured: boolean;
  placeholder?: boolean;
};

export const portfolioProjects: Project[] = [
  {
    title: "QR Claims",
    client: "iHawk Labs",
    year: "2026",
    outcome:
      "QR gift claims for online sellers — customers scan the insert card in their parcel, claim a free gift, and staff work every claim from one back office with emails built in.",
    stack: ["Next.js", "Postgres", "Cloudflare"],
    href: "https://ihawklabs.com",
    featured: true,
  },
  {
    title: "Multi-vendor marketplace",
    client: "iHawk Labs",
    year: "2026",
    outcome:
      "A marketplace where sellers list their own products and get paid out, while the owner runs the storefront.",
    stack: ["Medusa", "Mercur", "Next.js"],
    href: "https://my-mercurjs-store-storefront.vercel.app/",
    featured: true,
  },
  {
    title: "Medusa Assistant",
    client: "iHawk Labs",
    year: "2026",
    outcome:
      "An AI assistant for the store admin — ask about orders, products and customers in plain English and get answers from the store's own data.",
    stack: ["AI agents", "Medusa", "TypeScript"],
    href: "https://medusa-assistant.vercel.app/",
    featured: true,
  },
];

export function getFeaturedProjects() {
  return portfolioProjects.filter((project) => project.featured);
}
