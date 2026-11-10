
import { useState, useEffect } from "react";
import { obtenerPersonajes } from "../services/rickAndMortyApi";

export const usePersonajes = () => {
    const [personajes, setPersonajes] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const [info, setInfo] = useState(null);
    const [paginaActual, setPaginaActual] = useState(1);
    const [busquedaActual, setBusquedaActual] = useState("");

    const buscarPersonajes = async (nombre = '', pagina = 1) => {
        setCargando(true);
        setError(null); //Resetear buscador
        const esNuevaBusqueda = nombre !== busquedaActual;
        const paginaFinal = esNuevaBusqueda ? 1 : pagina;

        setBusquedaActual(nombre);
        setPaginaActual(paginaFinal);
        try {
            const data = await obtenerPersonajes(nombre, paginaFinal);
            setPersonajes(data.results); // Los personajes están en results
            setInfo(data.info); // Info de paginación  (prev, next, pages, count)  
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError("No se encontraron personajes con ese nombre.");
            } else {
                setError("Hubo problemas al cargar. ¡Intentalo en unos intantes!");
            }
            setPersonajes(null); // Si falla la búsqueda, vaciamos la lista
            setInfo(null);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        buscarPersonajes();
    }, []);

    const cambiarPagina = (nuevaPagina) => {
        if (info && nuevaPagina >= 1 && nuevaPagina <= info.pages) {
            buscarPersonajes(busquedaActual, nuevaPagina);
        }
    };

    return { personajes, cargando, error, info, paginaActual, cambiarPagina, buscarPersonajes };
};