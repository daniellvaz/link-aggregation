export default function Header() {
  return (
    <header className="w-full p-4 flex flex-col items-center justify-center">
      <img
        className="w-[120px] h-[120px] rounded-full border border-zinc-200"
        src="https://github.com/daniellvaz.png"
        alt="Rapaz de 30 anos com os braços cruzados, usando uma blusa preta e uma calça azul encostado em uma parede."
      />

      <h1 className="mt-8 text-2xl text-zinc-50 font-bold">
        Daniel Murilo Vaz
      </h1>
      <ul className="mt-4">
        <li>
          <p className="text-xs text-zinc-50 text-center">
            Desenvolvedor fullstack 🚀
          </p>
        </li>
        <li>
          <p className="text-xs text-zinc-50 text-center">
            PHP do jeito certo + Mysql 😎
          </p>
        </li>
        <li>
          <p className="text-xs text-zinc-50 text-center">
            Nodejs, React e React Native por paixão 🧡
          </p>
        </li>
      </ul>
    </header>
  );
}
