import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="max-w-[1120px] w-full m-auto flex items-center justify-center">
        <nav className="w-full mt-8">
          <ul className="w-full flex flex-col items-center justify-center">
            {children}
          </ul>
        </nav>
      </main>
  )
}