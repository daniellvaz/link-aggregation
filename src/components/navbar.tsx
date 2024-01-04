import { Sun } from 'lucide-react'
import DanielLogo from '../assets/logo.svg'; 

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex items-center justify-between border-b border-b-zinc-700">
      <img src={DanielLogo} alt="Daniel logo" />
      <ul className='flex gap-4 items-center justify-center'>
        <li className="text-sm text-zinc-50 font-bold hover:text-zinc-400 transition-colors">
          <a href="/">Home</a>
        </li>
        <li className="text-sm text-zinc-50 font-bold hover:text-zinc-400 transition-colors">
          <a href="/repos">Repos</a>
        </li>
      </ul>

      <button className='border border-zinc-200 p-2 rounded text-zinc-200'>
        <Sun size={16}/>
      </button>
    </nav>
  )
}