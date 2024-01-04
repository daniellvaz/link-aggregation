import { ElementType } from "react"

interface LinkItemProps {
  title: string;
  href: string;
  icon?: ElementType;
}

export default function LinkItem({ title, href, icon: Icon }: LinkItemProps) {
  return (
    <li className="max-w-[270px] w-full text-sm text-zinc-50">
      <a
        target="_blank"
        href={href}
        className="w-full mb-4 p-4 flex items-center justify-between border border-zinc-300 rounded-sm hover:bg-zinc-800 transition-all"
      >
        {title}
        {Icon && <Icon size={16} />}
      </a>
    </li>
  )
}