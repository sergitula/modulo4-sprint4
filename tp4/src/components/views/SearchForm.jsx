import { useState } from "react";
import { usePersonajesContext } from "../../context/PersonajesContext";

export const SearchForm = () => {
    const [nombre, setNombre] = useState("");
    const { buscarPersonajes } = usePersonajesContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        buscarPersonajes(nombre);
    };

    const handleChange = (e) => {
        const nuevoValor = e.target.value;
        setNombre(nuevoValor);
        if (nuevoValor === "") {
            buscarPersonajes("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="relative flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#849495]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Buscar personaje por nombre..."
                    value={nombre}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-[#181a24] text-[#e4e1ed] placeholder-[#849495] text-sm sm:text-base outline-none focus:border-[#39ff14]/60 focus:ring-1 focus:ring-[#39ff14]/40 transition-all shadow-inner"
                />
            </div>
            <button
                type="submit"
                className="bg-[#39ff14] hover:bg-[#32e010] active:scale-[0.99] text-black font-[var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.65)] flex items-center justify-center gap-2 shrink-0"
            >
                <span>BUSCAR</span>
                <span className="text-base leading-none">&rarr;</span>
            </button>
        </form>
    );
};