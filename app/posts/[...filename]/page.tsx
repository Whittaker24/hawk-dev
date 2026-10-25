import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import type { Metadata } from "next";
import PostClientPage from "./client-page";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function generateStaticParams() {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  return filenames.map((filename) => ({
    filename: filename.replace(/\.mdx$/, "").split("/"),
  }));
}

type Frontmatter = {
  title: string;
  subtitle?: string;
  heroImg?: string;
  poster?: string;
  date?: string;
  excerpt?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string[] }>;
}): Promise<Metadata> {
  const { filename } = await params;
  const filePath = path.join(postsDirectory, `${filename.join("/")}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const parsedFile = matter(fileContent) as GrayMatterFile<string>;
  const frontmatter = parsedFile.data as Frontmatter;

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt || frontmatter.subtitle || frontmatter.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ filename: string[] }>;
}) {
  const { filename } = await params;
  const filePath = path.join(postsDirectory, `${filename.join("/")}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const parsedFile = matter(fileContent) as GrayMatterFile<string>;
  const frontmatter = parsedFile.data as Frontmatter;

  if (!frontmatter.title) {
    throw new Error("Frontmatter must include a title.");
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <PostClientPage frontmatter={frontmatter} content={parsedFile.content} />
    </div>
  );
}
