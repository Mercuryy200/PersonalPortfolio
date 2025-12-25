import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export async function GET() {
  try {
    const username = "Mercuryy200";
    
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`);
    }

    const repos: GitHubRepo[] = await res.json();

    const projects = repos
      .filter(repo => !repo.fork) 
      .slice(0, 3) 
      .map(repo => ({
        title: repo.name
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        description: repo.description || "No description available",
        features: [
          `⭐ ${repo.stargazers_count} stars`,
          `🔀 ${repo.forks_count} forks`,
          `💻 Built with ${repo.language || 'Multiple languages'}`,
          `📅 Updated ${new Date(repo.updated_at).toLocaleDateString()}`,
        ].filter(Boolean),
        technologies: [
          repo.language,
          ...repo.topics.slice(0, 3)
        ].filter(Boolean).join(", "),
        github: repo.html_url,
        url: repo.homepage || repo.html_url,
      }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    
    return NextResponse.json([], { status: 200 });
  }
}

export const dynamic = 'force-dynamic'; 
export const revalidate = 3600; 