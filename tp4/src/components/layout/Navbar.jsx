import { useState } from "react";
import { useFavoritosContext } from "../../context/FavoritosContext";
import { PersonajesPanel } from "../ui/PersonajesPanel";

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { favoritos } = useFavoritosContext();

    return (
        <>
            <nav className="bg-[#13131b]/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-3.5 flex justify-between items-center gap-2">

                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#39ff14] bg-[#39ff14]/10 flex items-center justify-center text-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.45)] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 sm:w-5 sm:h-5">
                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
                                <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
                            </svg>
                        </div>

                        <span className="text-sm sm:text-lg font-extrabold italic tracking-wider text-[#e4e1ed] font-[var(--font-display)] truncate">
                            RICK<span className="text-[#39ff14]">&amp;</span>MORTY
                        </span>

                        <span className="bg-[#1f222e] text-[#849495] text-[9px] sm:text-[10px] font-[var(--font-label)] font-semibold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded border border-white/10 shrink-0">
                            PORTAL APP
                        </span>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="relative flex items-center gap-1.5 sm:gap-2 bg-[#1f222e] hover:bg-[#292c3a] border border-white/10 hover:border-[#39ff14]/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all font-semibold text-xs sm:text-sm text-[#e4e1ed] cursor-pointer shrink-0 shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#ff506e] shrink-0">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        <span>Favoritos</span>

                        <span className="bg-[#39ff14] text-black text-[11px] font-[var(--font-label)] font-extrabold min-w-5 h-5 px-1.5 flex items-center justify-center rounded-full shadow-[0_0_8px_rgba(57,255,20,0.6)]">
                            {favoritos.length}
                        </span>
                    </button>

                </div>
            </nav>

            {/* Usamos el Panel con el nombre correcto */}
            <PersonajesPanel
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};