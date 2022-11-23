const produccionesTerminadasContainer = document.querySelector("[data-cards-terminadas]");
const produccionesDesarrolloContainer = document.querySelector("[data-cards-desarrollo]");
const videoClipsContainer = document.querySelector("[data-cards-video]");
const seriesContainer = document.querySelector("[data-cards-series-desarrollo]");
const teartoContainer = document.querySelector("[data-cards-teatro]");
const publicidadContainer = document.querySelector("[data-cards-publicidad]");

// Obtiene el selector del id para no repetir las producciones en las opciones
const id = document.querySelector("[data-id]");

// Función que despliega las producciones en el HTML
const cardsProducciones = (peliculas, container) => {
  peliculas.forEach((pelicula) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<a class="link-card" href="${pelicula.route}" ><img class="img-card" src="${pelicula.img}" alt="" /></a>`;

    container.appendChild(div);
  });
};

// Si la etiqeuta no existe en el html no lo renderiza
document.addEventListener("DOMContentLoaded", () => {
  if (produccionesTerminadasContainer) {
    cardsProducciones(peliculasTerminadas, produccionesTerminadasContainer);
  }

  if (id) {
    let peliculasId = peliculasDesarrollo.map((ele) => ele);
    peliculasId = peliculasId.filter((ele) => ele.id != id.innerHTML);
    cardsProducciones(peliculasId, produccionesDesarrolloContainer);
  } else {
    cardsProducciones(peliculasDesarrollo, produccionesDesarrolloContainer);
  }
  cardsProducciones(teatro, teartoContainer);
  cardsProducciones(series, seriesContainer);
  cardsProducciones(videoClips, videoClipsContainer);
  cardsProducciones(publicidad, publicidadContainer);
});
