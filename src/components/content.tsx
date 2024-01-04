import { Linkedin, Github, Instagram } from 'lucide-react'

import LinkItem from "./linkItem";

export default function Content() {
  return (
    <main className="max-w-[1120px] w-full m-auto flex items-center justify-center">
        <nav className="w-full mt-8">
          <ul className="w-full flex flex-col items-center justify-center">

            <LinkItem 
              title="LinkedIn" 
              href="https://www.linkedin.com/in/daniel-murilo-vaz" 
              icon={Linkedin} 
            />
            <LinkItem 
              title="Github" 
              href="https://github.com/daniellvaz"
              icon={Github} 
            />
            <LinkItem 
              title="Instagram" 
              href="https://www.instagram.com/daniellmurilo"
              icon={Instagram} 
            />
            <LinkItem 
              title="Moveup Tecnologia" 
              href="https://moveuptech.com.br"
            />
          </ul>
        </nav>
      </main>
  )
}