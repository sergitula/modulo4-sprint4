import { useFavoritosContext } from "../../context/FavoritosContext";

export const PersonajeCard = ({ personaje }) => {
    const { name, image, status, species, gender, origin, location, id } = personaje;
    const { toggleFavorito, esFavorito } = useFavoritosContext(); // Consumimos el contexto
    const isFav = esFavorito(id);
    const statusColor =
        status === "Alive"
            ? "bg-[#39ff14] shadow-[0_0_6px_#39ff14]"
            : status === "Dead"
                ? "bg-[#ff506e] shadow-[0_0_6px_#ff506e]"
                : "bg-[#849495]";

    return (
        <div
            className={`bg-[#181a24] rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${isFav
                ? "border-2 border-[#39ff14]/80 shadow-[0_0_24px_rgba(57,255,20,0.22)]"
                : "border border-white/10 hover:border-[#39ff14]/40 shadow-lg"
                }`}
        >
            <div className="relative">
                <img
                    src={image}
                    alt={`Imagen de ${name}`}
                    className="w-full h-60 sm:h-56 object-cover"
                />

                {/* Badge Estado (Izquierda) */}
                <div className="absolute top-3 left-3 bg-[#13131b]/85 text-[#e4e1ed] px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-[var(--font-label)] font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md border border-white/10">
                    <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
                    {status}
                </div>

                {/* Badge Especie (Derecha) */}
                <div className="absolute top-3 right-3 bg-[#00363a]/90 text-[#00f0ff] border border-[#00f0ff]/35 px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-[var(--font-label)] font-semibold backdrop-blur-md">
                    {species}
                </div>
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl font-bold text-[#e4e1ed] font-[var(--font-display)] truncate" title={name}>
                    {name}
                </h2>
                <p className="text-xs font-[var(--font-label)] text-[#849495] mt-1 mb-4 line-clamp-2">
                    {gender ? `${gender} • ${origin?.name || species}` : species}
                </p>

                {/* Caja Última Ubicación */}
                <div className="bg-[#13131b] border border-white/5 rounded-xl p-3 mb-4">
                    <span className="block text-[10px] font-[var(--font-label)] font-bold uppercase tracking-wider text-[#39ff14] mb-1">
                        ÚLTIMA UBICACIÓN:
                    </span>
                    <div className="flex items-center gap-1.5 min-w-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#39ff14] shrink-0">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium text-[#e4e1ed] truncate" title={location.name}>
                            {location.name}
                        </span>
                    </div>
                </div>

                {/* Pie de Tarjeta */}
                <div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-center gap-2">
                    <span className="text-xs font-[var(--font-label)] text-[#849495]">
                        ID: #{id}
                    </span>

                    <button
                        type="button"
                        onClick={() => toggleFavorito(personaje)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ${isFav
                            ? "bg-[#39ff14]/15 border border-[#39ff14] text-[#39ff14] shadow-[0_0_12px_rgba(57,255,20,0.35)]"
                            : "bg-[#13131b] border border-white/10 text-[#849495] hover:text-[#39ff14] hover:border-[#39ff14]/50"
                            }`}
                        title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};