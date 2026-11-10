# TP: Rick and Morty Buscador - Sergio Tula

**🌐 Demo:** [https://modulo4-sprint4-rickandmorty-sergio.netlify.app/]

## Qué es
Una aplicación web para explorar el multiverso de Rick and Morty construida con React, Vite y Tailwind CSS. Permite buscar personajes, navegar entre páginas con control estricto de límites y guardar favoritos de forma persistente.

## Cómo correrlo
1. Clonar el repositorio.
2. Crear un archivo `.env` en la raíz del proyecto y agregar la siguiente variable:
   `VITE_API_BASE_URL=https://rickandmortyapi.com/api`
3. Instalar dependencias e iniciar el servidor:
```bash
pnpm install
pnpm run dev
```

## Mis contextos

* PersonajesContext: Guarda el estado global de la búsqueda (array de personajes, información de paginación, y estados de carga/error). Lo consume PersonajesList para renderizar la grilla y la paginación, y SearchForm para disparar nuevas búsquedas.
* FavoritosContext: Guarda el array de personajes elegidos. Lo consume PersonajeCard para verificar si un personaje ya es favorito y para poder agregarlo o quitarlo de la lista.

## Mis hooks
* usePersonajes: Centraliza toda la lógica de consumo de la API (vía Axios). Maneja las variables de paginación, diferencia entre errores y devuelve las funciones para cambiar de página.

* useFavoritos: Encapsula la lógica de negocio de los favoritos (agregar, alternar, verificar si existe) y lo sincroniza automáticamente con el localStorage del navegador.

## Que genere con IA

Usé Gemini como tutor interactivo. Yo armé la estructura base, el maquetado, los servicios de la API y los contextos. Utilicé la IA para refactorizar la lógica de paginación (bloqueando botones matemáticamente), solucionar problemas y organizar las carpetas de forma correcta.