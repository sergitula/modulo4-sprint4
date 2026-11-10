import { createContext, useContext } from "react";
import { usePersonajes } from "../hooks/usePersonajes";

// 1- Creamos el contexto
const PersonajesContext = createContext();

// 2- Proveemos el contexto
export const PersonajesProvider = ({ children }) => {
    const valoresPersonajes = usePersonajes();
    return (
        <PersonajesContext.Provider value={valoresPersonajes}>
            {children}
        </PersonajesContext.Provider>
    );
};

// 3- Consumir 
// eslint-disable-next-line react-refresh/only-export-components
export const usePersonajesContext = () => {
    const contexto = useContext(PersonajesContext);
    if (!contexto) {
        throw new Error("usePersonajesContext() tiene que usarse adentro de <PersonajesProvider>");
    }
    return contexto;
};