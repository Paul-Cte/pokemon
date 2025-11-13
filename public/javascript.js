let btn1 = document.getElementById("btn-booster");
let btn2 = document.getElementById("btn-cartes");

let sectionCarte = document.getElementById("section-carte");
let sectionBooster = document.getElementById("section-booster");

btn1.addEventListener("click", () => {
  sectionCarte.classList.remove("active");
  sectionBooster.classList.add("active");
});

btn2.addEventListener("click", () => {
  sectionBooster.classList.remove("active");
  sectionCarte.classList.add("active");
});

Array.from(document.getElementsByClassName("card")).forEach((element) => {
  element.addEventListener("click", () => {
    openOverlay(element);
  });
});

function openOverlay(element) {
  const overlay = document.getElementById("overlay");
  overlay.style.top = window.scrollY + "px";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
  document.getElementById("card-zoomed").src = element.src;
}

document.getElementById("btn-fermer-zoom").addEventListener("click", () => {
  closeOverlay();
});

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  document.body.style.overflow = "visible";
}
