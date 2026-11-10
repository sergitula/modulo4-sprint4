import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const obtenerPersonajes = async (nombre = "", page = 1) => {
    const response = await axios.get(`${BASE_URL}/character`, {
        params: { name: nombre, page: page }
    });
    return response.data; //{info, results}
};