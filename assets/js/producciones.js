const produccionesTerminadasContainer = document.querySelector("[data-cards-terminadas]");
const produccionesDesarrolloContainer = document.querySelector("[data-cards-desarrollo]");
const videoClipsContainer = document.querySelector("[data-cards-video]");
const seriesContainer = document.querySelector("[data-cards-series-desarrollo]");

const cardsProduccionesTerminadas = (peliculas, container) => {
  peliculas.forEach((pelicula) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = ` <img class="img-card" src="${pelicula.img}" alt="" />
                          <h3 class="card-title">${pelicula.title}</h3>
                          <a href="${pelicula.route}" class="btn-terminadas">Ver más</a>`;

    container.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (produccionesTerminadasContainer) {
    cardsProduccionesTerminadas(peliculasTerminadas, produccionesTerminadasContainer);
  }

  cardsProduccionesTerminadas(peliculasDesarrollo, produccionesDesarrolloContainer);
  cardsProduccionesTerminadas(series, seriesContainer);
  cardsProduccionesTerminadas(videoClips, videoClipsContainer);
});
