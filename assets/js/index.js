const mediaqueryList = window.matchMedia("(max-width: 530px)");
const facebookContainer = document.querySelector("[data-facebook]");

if (mediaqueryList.matches) {
  facebookContainer.innerHTML = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCineworldMedia%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
}
