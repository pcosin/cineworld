let splide = new Splide("#main_carousel", {
  pagination: false,
});

let thumbnails = document.getElementsByClassName("thumbnail");
let current = 0;

for (let i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", () => {
    splide.go(index);
    console.log(index);
  });
}
splide.on("mounted move", () => {
  let thumbnail = thumbnails[splide.index];
  console.log(thumbnail);
  console.log(current);

  if (thumbnail) {
    if (current) {
      console.log(current);
      current.classList.remove("is-active");
    }
    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();
