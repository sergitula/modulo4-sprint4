import { useFavoritosContext } from "../../context/FavoritosContext";

export const PersonajesPanel = ({ isOpen, onClose }) => {
    const { favoritos, toggleFavorito, vaciarFavoritos } = useFavoritosContext();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">

            <div className="w-full max-w-md bg-[#13131b] border-l border-white/10 h-full shadow-2xl flex flex-col text-[#e4e1ed]">

                <div className="p-4 sm:p-5 border-b border-white/10 flex justify-between items-center bg-[#181a24]">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14]"></span>
                        <h2 className="text-lg sm:text-xl font-bold font-[var(--font-display)] text-[#e4e1ed]">
                            Mis Favoritos <span className="text-[#39ff14] font-[var(--font-label)] text-sm">({favoritos.length})</span>
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg bg-[#1f222e] hover:bg-[#ff506e]/20 text-[#849495] hover:text-[#ff506e] border border-white/10 hover:border-[#ff506e]/40 flex items-center justify-center text-2xl leading-none transition-colors cursor-pointer"
                    >
                        &times;
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                    {favoritos.length === 0 ? (
                        <div className="text-center mt-14 px-4">
                            <p className="text-3xl mb-3">🧪</p>
                            <p className="text-[#849495] text-sm font-medium">
                                Aún no tenés personajes favoritos guardados en esta dimensión.
                            </p>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-3">
                            {favoritos.map((fav) => (
                                <li
                                    key={fav.id}
                                    className="flex items-center gap-3 sm:gap-4 bg-[#181a24] p-3 rounded-xl border border-white/10 hover:border-[#39ff14]/40 transition-colors"
                                >
                                    <img
                                        src={fav.image}
                                        alt={fav.name}
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover border border-white/10 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-[#e4e1ed] font-[var(--font-display)] text-sm truncate">
                                            {fav.name}
                                        </h3>
                                        <p className="text-xs font-[var(--font-label)] text-[#00f0ff] truncate mt-0.5">
                                            {fav.species}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleFavorito(fav)}
                                        className="text-[#ff506e] hover:bg-[#ff506e]/15 border border-transparent hover:border-[#ff506e]/30 p-2 rounded-lg transition-colors cursor-pointer shrink-0"
                                        title="Eliminar de favoritos"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {favoritos.length > 0 && (
                    <div className="p-4 sm:p-5 border-t border-white/10 bg-[#181a24]">
                        <button
                            onClick={vaciarFavoritos}
                            className="w-full bg-[#ff506e]/15 hover:bg-[#ff506e] text-[#ff506e] hover:text-white border border-[#ff506e]/40 font-[var(--font-display)] font-bold text-sm py-3 px-4 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(255,80,110,0.15)]"
                        >
                            Vaciar Favoritos
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};