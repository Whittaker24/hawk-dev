export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  outcome: string;
  stack: string[];
  featured: boolean;
  placeholder?: boolean;
  /** Longer write-up for the details page, one string per paragraph. */
  overview: string[];
  highlights: string[];
  links: { label: string; href: string; note?: string }[];
  screenshots: Screenshot[];
};

const desktop = (src: string, alt: string, caption: string): Screenshot => ({
  src,
  alt,
  caption,
  width: 1440,
  height: 900,
});

const phone = (src: string, alt: string, caption: string): Screenshot => ({
  src,
  alt,
  caption,
  width: 780,
  height: 1400,
});

export const portfolioProjects: Project[] = [
  {
    slug: "qr-claims",
    title: "QR Claims",
    client: "iHawk Labs",
    year: "2026",
    outcome:
      "QR gift claims for online sellers — customers scan the insert card in their parcel, claim a free gift, and staff work every claim from one back office with emails built in.",
    stack: ["Next.js", "Postgres", "Cloudflare"],
    featured: true,
    overview: [
      "Online sellers rarely get to talk to the people who buy from them on marketplaces. QR Claims puts a QR code on the insert card in every parcel, offering a free gift. Customers scan it, fill in a short branded form, and the seller gets a customer they can reach again.",
      "Behind the form is a back office for the seller's team: every claim in one list, possible duplicate orders flagged, gift status tracked, and confirmation and reply emails sent from templates. Each QR code records which channel it ships with — Amazon, eBay or the seller's own shop — so the form asks for the right order number.",
      "It's built white-label: one codebase, configured per client with their name, banner and colours, and deployed as a separate app and database for each client.",
    ],
    highlights: [
      "Branded, mobile-first claim form with Cloudflare Turnstile spam protection",
      "Dashboard with scans, claims, gifts still to send and possible duplicates",
      "QR codes per print run or channel, with scan counts and downloadable images",
      "Email confirmations and staff replies from editable templates",
      "Staff login through Cloudflare Access, and CSV export of claims",
    ],
    links: [
      { label: "iHawk Labs", href: "https://ihawklabs.com" },
      {
        label: "Try the claim form",
        href: "https://qrclaims-demo.ihawklabs.com/claim?src=DEMO1001",
      },
    ],
    screenshots: [
      phone(
        "/work/qr-claim-form.jpg",
        "QR Claims claim form on a phone",
        "The claim form customers see after scanning, branded for the seller.",
      ),
      desktop(
        "/work/qr-dashboard.jpg",
        "QR Claims back office dashboard",
        "The dashboard: what needs doing and how each QR code is performing.",
      ),
      desktop(
        "/work/qr-claim-detail.jpg",
        "A single claim in the back office",
        "One claim, with its status, gift tracking, notes and email reply.",
      ),
      desktop(
        "/work/qr-codes.jpg",
        "QR codes page in the back office",
        "QR codes, each tied to a sales channel, with scan and claim counts.",
      ),
      desktop(
        "/work/qr-landing.jpg",
        "iHawk Labs landing page",
        "The iHawk Labs landing page, where the demo lives.",
      ),
    ],
  },
  {
    slug: "neo-nutrition",
    title: "Neo Nutrition",
    client: "Neo Nutrition Ltd",
    year: "2026",
    outcome:
      "Website, gift-claim form and staff back office for a UK supplement brand — the client project QR Claims grew out of.",
    stack: ["Next.js", "Cloudflare Pages", "Railway"],
    featured: true,
    overview: [
      "Neo Nutrition is a UK supplement brand. I upgraded their website, a fully static Next.js site on Cloudflare Pages, and added a contact form that sends through Resend and is protected by Turnstile.",
      "The bigger piece is their gift-claim system. Customers scan a QR code on the card in their parcel, land on a claim form on the Neo site, and the claim goes straight into a staff back office. Staff work through claims, send gifts and reply to customers from there.",
      "I then turned that back office into QR Claims, a white-label product other sellers can use.",
    ],
    highlights: [
      "Static Next.js site on Cloudflare Pages, with server code in Pages Functions",
      "QR short links that keep the code even if the back office is unreachable",
      "Claim form validated the same way on the site and in the back office",
      "Separate back office on Railway with Postgres, behind Cloudflare Access",
    ],
    links: [{ label: "neo-nutrition.org", href: "https://neo-nutrition.org/" }],
    screenshots: [
      desktop(
        "/work/neo-home.jpg",
        "Neo Nutrition website home page",
        "The Neo Nutrition website.",
      ),
      phone(
        "/work/neo-claim.jpg",
        "Neo Nutrition claim form on a phone",
        "The gift-claim form customers reach from the QR code.",
      ),
      desktop(
        "/work/qr-dashboard.jpg",
        "Back office dashboard with demo data",
        "The back office, shown in its QR Claims form with demo data — Neo's holds real customer details.",
      ),
    ],
  },
  {
    slug: "marketplace",
    title: "Multi-vendor marketplace",
    client: "iHawk Labs",
    year: "2026",
    outcome:
      "A marketplace where sellers list their own products and get paid out, while the owner runs the storefront.",
    stack: ["Medusa", "Mercur", "Next.js"],
    featured: true,
    overview: [
      "A ready-to-launch marketplace: several stores sell through one storefront, each managing its own products and orders, while the marketplace owner runs the site.",
      "It's built on Medusa and Mercur, open-source commerce tools, so there are no per-sale platform fees. The demo is set up as a health and pharmacy marketplace with four stores.",
    ],
    highlights: [
      "Shop by store or across every product",
      "Each vendor manages its own catalogue and orders",
      "Built on open-source Medusa and Mercur",
    ],
    links: [
      {
        label: "Visit the demo store",
        href: "https://my-mercurjs-store-storefront.vercel.app/",
      },
    ],
    screenshots: [
      desktop(
        "/work/market-home.jpg",
        "Marketplace storefront home page",
        "The storefront: shop by store or browse every product.",
      ),
    ],
  },
  {
    slug: "medusa-assistant",
    title: "Medusa Assistant",
    client: "iHawk Labs",
    year: "2026",
    outcome:
      "An AI assistant for the store admin — ask about orders, products and customers in plain English and get answers from the store's own data.",
    stack: ["AI agents", "Medusa", "TypeScript"],
    featured: true,
    overview: [
      "Store owners spend a lot of time digging through admin screens to answer simple questions. Medusa Assistant connects to a Medusa store and answers them in a chat, using the store's own data.",
      "It works with any Medusa store, on its own or alongside the marketplace.",
    ],
    highlights: [
      "Chat with your store's data in plain English",
      "Inventory overview",
      "Sales and customer insights",
    ],
    links: [
      {
        label: "See the assistant",
        href: "https://medusa-assistant.vercel.app/",
      },
    ],
    screenshots: [
      desktop(
        "/work/assistant-home.jpg",
        "Medusa Assistant home page",
        "Chat, inventory and insights in one place.",
      ),
    ],
  },
  {
    slug: "qr-payment-ledger",
    title: "QR Payment Ledger",
    client: "Personal project",
    year: "2026",
    outcome:
      "Upload screenshots of QR payment slips and get a clean, exportable ledger — Claude reads each slip so nobody has to type them up.",
    stack: ["Python", "Streamlit", "Claude API"],
    featured: false,
    overview: [
      "In Thailand most small payments are QR transfers, and the only record is a screenshot of the banking app's confirmation slip. Keeping tax records means typing those slips up by hand.",
      "QR Payment Ledger takes a batch of slip screenshots and uses Claude's vision and tool use to pull out the date, time, amount, recipient, bank and reference number. The results go into a table to check, then export to CSV.",
      "It's a proof of concept: records are kept for the session only, and access is behind a simple login.",
    ],
    highlights: [
      "Batch upload of slip screenshots, including iPhone HEIC images",
      "Structured extraction with Claude vision and tool use",
      "Review in a table, then export to CSV",
    ],
    links: [
      {
        label: "Open the app",
        href: "https://qr-payload.streamlit.app/",
        note: "Login required — ask me for access.",
      },
    ],
    screenshots: [],
  },
];

export function getFeaturedProjects() {
  return portfolioProjects.filter((project) => project.featured);
}

export function getProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
