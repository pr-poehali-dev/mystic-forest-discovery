interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-wide">
          <span style={{ color: "#e8d49a" }}>М</span>аслик
        </div>
        <nav className="flex gap-8">
          <a
            href="#oils"
            className="hover:opacity-70 transition-opacity duration-300 uppercase text-sm font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Масла
          </a>
          <a
            href="#footer"
            className="hover:opacity-70 transition-opacity duration-300 uppercase text-sm font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
