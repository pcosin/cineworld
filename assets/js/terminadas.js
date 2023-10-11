let splide = new Splide("#main_carousel", {
  pagination: false,
});

let thumbnails = document.getElementsByClassName("thumbnail");
let current = null;

for (let i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", () => {
    splide.go(index);
  });
}
splide.on("move", (newIndex) => {
  let thumbnail = thumbnails[newIndex];

  if (thumbnail && current !== thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }
    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();
