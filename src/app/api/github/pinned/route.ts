import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = "RodolfoAlves32";
    
    // 1. Fetch GitHub HTML to find pinned repositories
    const htmlRes = await fetch(`https://github.com/${username}`, { next: { revalidate: 3600 } });
    const html = await htmlRes.text();

    // 2. Extract repository names from HTML
    const repoNames: string[] = [];
    const regex = new RegExp(`href="/${username}/([^/"]+)"`, 'g');
    let match;
    
    while ((match = regex.exec(html)) !== null) {
      const name = match[1];
      // Ignore navigation tabs and query params
      if (!name.includes('?') && !name.includes('tab=') && !name.includes('followers') && !name.includes('following')) {
        if (!repoNames.includes(name)) {
          repoNames.push(name);
        }
      }
    }

    // Limit to the first 6 items typically found in the pinned section
    const pinnedNames = repoNames.slice(0, 6);

    // 3. Fetch detailed data from GitHub API
    const apiRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { next: { revalidate: 3600 } });
    const allRepos = await apiRes.json();

    if (!Array.isArray(allRepos)) {
      return NextResponse.json({ error: "Falha ao buscar detalhes da API do GitHub" }, { status: 500 });
    }

    // 4. Match pinned names with API data
    const pinnedRepos = pinnedNames
      .map(name => allRepos.find(repo => repo.name === name))
      .filter(Boolean); // Remove null/undefined

    // Fallback to 6 latest repos if none were matched
    const finalRepos = pinnedRepos.length > 0 ? pinnedRepos : allRepos.filter(r => !r.fork).slice(0, 6);

    return NextResponse.json(finalRepos);
    
  } catch (error) {
    console.error("Erro ao buscar repositórios pinados:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
