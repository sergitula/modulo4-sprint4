import { usePersonajesContext } from "../../context/PersonajesContext";
import { SearchForm } from "./SearchForm";
import { PersonajeCard } from "../ui/PersonajeCard";

export const PersonajesList = () => {
    const { personajes, cargando, error, info, paginaActual, cambiarPagina, limpiarError } = usePersonajesContext(); //consumimos el contexto

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">

            {/* Título y Subtítulo */}
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-[var(--font-display)] text-[#e4e1ed] mb-2.5">
                    Rick and Morty{" "}
                    <span className="text-[#39ff14] drop-shadow-[0_0_18px_rgba(57,255,20,0.55)]">
                        Buscador
                    </span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-[#849495] max-w-xl mx-auto px-2">
                    Explora las dimensiones del multiverso C-137. Encuentra y guarda a tus especímenes favoritos.
                </p>
            </div>

            {/* Formulario de Búsqueda */}
            <SearchForm />

            {/* Estado: CARGANDO */}
            {cargando && (
                <div className="flex flex-col sm:flex-row justify-center items-center py-20 gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.4)]"></div>
                    <span className="text-base sm:text-xl font-medium text-[#e4e1ed] font-[var(--font-display)]">
                        Buscando en el multiverso...
                    </span>
                </div>
            )}

            {/* Estado: ERROR */}
            {!cargando && error && (
                <div className="bg-[#181a24] border border-[#ff506e]/40 text-[#ff506e] px-5 py-8 rounded-2xl text-center max-w-lg mx-auto shadow-[0_0_20px_rgba(255,80,110,0.15)]">
                    <p className="text-4xl mb-3">🛸</p>
                    <p className="font-bold text-lg text-[#e4e1ed] mb-1">¡Uy! Algo salió mal</p>
                    <p className="text-sm text-[#849495]">{error}</p>
                </div>
            )}

            {/* Barra de estado y resultados */}
            {!cargando && !error && personajes && info && (
                <div className="flex flex-wrap justify-between items-center mb-6 pb-3.5 border-b border-white/10 text-xs sm:text-sm text-[#849495] gap-2">
                    <p>
                        Mostrando <span className="font-bold text-[#e4e1ed]">{personajes.length}</span> de{" "}
                        <span className="font-bold text-[#39ff14]">{info.count}</span> personajes encontrados
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_8px_#39ff14] animate-pulse"></span>
                        <span className="text-[#39ff14] font-[var(--font-label)] font-medium text-xs tracking-wider">
                            API Online
                        </span>
                    </div>
                </div>
            )}

            {/* Estado: DATOS (Grilla) */}
            {!cargando && !error && personajes && personajes.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                    {personajes.map((p) => (
                        <PersonajeCard key={p.id} personaje={p} />
                    ))}
                </div>
            )}

            {/* PAGINACIÓN INTEGRADA */}
            {!cargando && !error && info && (
                <div className="flex flex-wrap justify-center items-center mt-10 sm:mt-12 mb-4 gap-2 sm:gap-3">
                    <button
                        type="button"
                        onClick={() => cambiarPagina(paginaActual - 1)}
                        disabled={!info.prev}
                        className="px-3.5 sm:px-4 py-2 bg-[#181a24] text-[#e4e1ed] border border-white/10 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#292c3a] hover:border-[#39ff14]/40 transition-all flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm font-medium"
                    >
                        <span>&lsaquo;</span> Anterior
                    </button>

                    <div className="px-3.5 sm:px-4 py-2 bg-[#13131b] text-[#849495] rounded-xl font-[var(--font-label)] text-xs sm:text-sm border border-white/10 shadow-inner">
                        Pág. <span className="text-[#e4e1ed] font-bold">{paginaActual}</span> de {info.pages}
                    </div>

                    <button
                        type="button"
                        onClick={() => cambiarPagina(paginaActual + 1)}
                        disabled={!info.next}
                        className="px-3.5 sm:px-4 py-2 bg-[#181a24] text-[#e4e1ed] border border-white/10 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#292c3a] hover:border-[#39ff14]/40 transition-all flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm font-semibold"
                    >
                        Siguiente <span>&rsaquo;</span>
                    </button>
                </div>
            )}

            {/* Caso borde: La API responde bien pero vacío */}
            {!cargando && !error && personajes?.length === 0 && (
                <p className="text-center text-[#849495] py-10 font-medium">
                    No hay personajes para mostrar.
                </p>
            )}

        </div>
    );
};