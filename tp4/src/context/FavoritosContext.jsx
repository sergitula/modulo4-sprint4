import { createContext, useContext } from "react";
import { useFavoritos } from "../hooks/useFavoritos";


// 1- Creamos el contexto
const FavoritosContext = createContext();

// 2- Proveemos el contexto
export const FavoritosProvider = ({ children }) => {
    const valoresFavoritos = useFavoritos();

    return (
        <FavoritosContext.Provider value={valoresFavoritos}>
            {children}
        </FavoritosContext.Provider>
    );
};

// 3- Consumir 
// eslint-disable-next-line react-refresh/only-export-components
export const useFavoritosContext = () => {
    const contexto = useContext(FavoritosContext);
    if (!contexto) {
        throw new Error("useFavoritosContext debe usarse dentro de un FavoritosProvider");
    }
    return contexto;
};