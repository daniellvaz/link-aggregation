import { useEffect, useState } from "react"
import { Star } from 'lucide-react'

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export default function Repos() {
  const [repos, setRepos] = useState<Repo[]>([])

  const handleRepos = async () => {
    const response = await fetch('https://api.github.com/users/daniellvaz/repos')
    const data = await response.json();

    setRepos(data)
  }

  useEffect(() => {
    handleRepos()
  }, [])

  return (
    <main className="min-h-screen">
      <div className="max-w-[1120px] w-full m-auto p-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(276px,1fr))]">
        {
          repos && repos.map(repo => (
            <a href={repo.html_url} target="_blank" key={repo.id} className="p-4 bg-zinc-800 border border-zinc-600 rounded-sm">
              <div className="w-full flex items-center justify-between">
                <strong className="text-sm text-zinc-50">
                  {repo.name}
                </strong>

                <div className="flex gap-2 items-center text-xs text-zinc-50">
                  <Star size={12}/>
                  <p>3</p>
                </div>
              </div>
              <div className="py-4 text-xs text-zinc-50">
                <p>{repo.language}</p>
              </div>
            </a>
          ))
        }
      </div>
    </main>
  )
}