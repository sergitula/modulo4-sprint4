export const Footer = () => {
    return (
        <footer className="bg-[#13131b] border-t border-white/10 mt-auto relative z-10">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

                {/* Logo */}
                <div className="flex items-center gap-2 text-[#e4e1ed] font-[var(--font-display)] font-extrabold italic text-xs sm:text-sm tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]"></span>
                    <span>
                        RICK<span className="text-[#39ff14]">&amp;</span>MORTY
                    </span>
                </div>

                {/* Copyright & API info */}
                <p className="text-[#849495] text-xs leading-relaxed">
                    · Desarrollado para fans del multiverso usando la{" "}
                    <a
                        href="https://rickandmortyapi.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#39ff14] hover:underline font-medium"
                    >
                        Rick and Morty API
                    </a>
                    . <span className="hidden sm:inline">· © 2026 · Nodo Tecnológico · Tula Sergio Ruben ·</span>
                </p>

                {/* Links */}
                <nav className="flex items-center gap-4 text-xs font-[var(--font-label)] text-[#849495]">
                    <a
                        href="https://rickandmortyapi.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#39ff14] transition-colors"
                    >
                        API
                    </a>
                </nav>

            </div>
        </footer>
    )
}
