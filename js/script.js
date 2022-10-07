const container = document.querySelector(".slide-part");
const slide = document.querySelector(".slide-part__container");
const box = document.querySelectorAll(".card");
const nextButton = document.querySelector(".next-sembol");
let width = box[0].offsetWidth;
slide.style.minWidth = `${box.length * width}px`;
let start;
let change;
let touch;
container.addEventListener("dragstart", (e) => {
  start = e.clientX;
});
container.addEventListener("dragover", (e) => {
  e.preventDefault();
  touch = e.clientX;
  change = start - touch;
});
container.addEventListener("dragend", () => {
  if (change > 0) {
    container.scrollLeft += touch / 25;
  } else {
    container.scrollLeft -= touch / 25;
  }
});

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  container.scrollLeft += box[0].offsetWidth;
});

// for mobil touch event
// container.addEventListener("touchstart",(e)=>{
// start=e.touches[0].clientX;
// })
// container.addEventListener("touchmove", (e) => {
//     e.preventDefault();
//     let touch = e.touches[0];
//     change = start - touch.clientX;
//   });
//   container.addEventListener("touchend", slideShow);
