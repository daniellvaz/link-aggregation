import { Linkedin, Github, Instagram } from 'lucide-react';

import MoveupLogo from '../assets/moveup.svg';
import Container from '../components/container';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Header from '../components/header';

export default function Index() {
  return (
    <Container>
      <Navbar />
      <Header />
      <main className="max-w-[1120px] w-full m-auto flex items-center justify-center">
        <nav className="w-full mt-8">
          <ul className="w-full flex flex-col items-center justify-center">
            <li className="max-w-[270px] w-full text-sm text-zinc-50">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/daniel-murilo-vaz"
                className="w-full mb-4 p-4 flex items-center justify-between border border-zinc-300 rounded-sm hover:bg-zinc-800 transition-all"
              >
                LinkedIn
                <Linkedin size={16} />
              </a>
            </li>
            <li className="max-w-[270px] w-full text-sm text-zinc-50">
              <a
                target="_blank"
                href="https://github.com/daniellvaz"
                className="w-full mb-4 p-4 flex items-center justify-between border border-zinc-300 rounded-sm hover:bg-zinc-800 transition-all"
              >
                Github
                <Github size={16} />
              </a>
            </li>
            <li className="max-w-[270px] w-full text-sm text-zinc-50">
              <a
                target="_blank"
                href="https://www.instagram.com/daniellmurilo"
                className="w-full mb-4 p-4 flex items-center justify-between border border-zinc-300 rounded-sm hover:bg-zinc-800 transition-all"
              >
                Instagram
                <Instagram size={16} />
              </a>
            </li>
            <li className="max-w-[270px] w-full text-sm text-zinc-50">
              <a
                target="_blank"
                href="https://moveuptech.com.br"
                className="w-full mb-4 p-4 flex items-center justify-between border border-zinc-300 rounded-sm hover:bg-zinc-800 transition-all"
              >
                Moveup
                <img className="w-[32px]" src={MoveupLogo} alt="Logo Moveup" />
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </Container>
  )
}