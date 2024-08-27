function PlaySound() {
  audio = new Audio("start.mp3");
  audio.play();
}
function Loadsite() {
  loadingScreen = document.getElementById("loading");

  loadingScreen.classList.remove("loading");
  loadingScreen.classist.remove("loadingHide");
  loadingScreen.classist.add("loadingDelete");
}
function loadSite() {
  loadingScreen = document.getElementById("loading");

  loadingScreen.classList.add("loadingHide");
  setTimeout(hide, 1400);
  setTimeout(playSound, 800);
}
