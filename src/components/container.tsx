import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="h-screen bg-zinc-950 overflow-y-auto">
      {children}
    </div>
  )
}