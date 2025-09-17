// js/api.js
// Función para obtener contenido de anatomía desde Wikipedia API

export async function obtenerAnatomiaWikipedia(titulo = "Anatomía humana") {
    const url = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(titulo)}`;
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('No se pudo obtener el contenido');
        const data = await resp.json();
        return {
            titulo: data.title,
            extracto: data.extract,
            imagen: data.thumbnail ? data.thumbnail.source : null,
            url: data.content_urls ? data.content_urls.desktop.page : null
        };
    } catch (err) {
        return { error: err.message };
    }
}
