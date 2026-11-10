import useLocalStorage from "./useLocalStorage";

export const useFavoritos = () => {
    const [favoritos, setFavoritos, limpiarStorage] = useLocalStorage("favoritos_rickandmorty", []);
    const esFavorito = (id) => { return favoritos.some((fav) => fav.id === id) };


    const toggleFavorito = (personaje) => {
        setFavoritos((favsActuales) => {
            const yaExiste = favsActuales.some((fav) => fav.id === personaje.id);
            if (yaExiste) {
                return favsActuales.filter((fav) => fav.id !== personaje.id);
            }
            return [...favsActuales, personaje];
        });
    };

    const vaciarFavoritos = () => {
        const confirmado = window.confirm("¿Estás seguro de que querés eliminar toda tu lista de favoritos?");
        if (confirmado) {
            limpiarStorage();
        }
    };


    return {
        favoritos,
        toggleFavorito,
        vaciarFavoritos,
        esFavorito
    };
};