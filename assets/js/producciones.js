const produccionesTerminadasContainer = document.querySelector("[data-cards-terminadas]");
const produccionesDesarrolloContainer = document.querySelector("[data-cards-desarrollo]");
const videoClipsContainer = document.querySelector("[data-cards-video]");
const seriesContainer = document.querySelector("[data-cards-series-desarrollo]");
const id = document.querySelector("[data-id]");

const cardsProducciones = (peliculas, container) => {
  peliculas.forEach((pelicula) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = ` 
                         
                          <a class="link-card" href="${pelicula.route}" ><img class="img-card" src="${pelicula.img}" alt="" /></a>`;

    container.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (produccionesTerminadasContainer) {
    cardsProducciones(peliculasTerminadas, produccionesTerminadasContainer);
  }

  if (id) {
    let peliculasId = peliculasDesarrollo.map((ele) => ele);
    peliculasId = peliculasId.filter((ele) => ele.id != id.innerHTML);
    console.log(peliculasId);
    cardsProducciones(peliculasId, produccionesDesarrolloContainer);
  } else {
    cardsProducciones(peliculasDesarrollo, produccionesDesarrolloContainer);
  }
  cardsProducciones(series, seriesContainer);
  cardsProducciones(videoClips, videoClipsContainer);
});
