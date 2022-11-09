let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
let leftArrow = document.querySelector(".prev");
let rightArrow = document.querySelector(".next");

let slides = document.querySelectorAll(".image");
slides.forEach((item) => {
  item.addEventListener("mouseover", function () {
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  });
});

slides.forEach((item) => {
  item.addEventListener("mouseout", function () {
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
  });
});

leftArrow.addEventListener("mouseover", function () {
  leftArrow.style.display = "block";
  rightArrow.style.display = "block";
});

rightArrow.addEventListener("mouseover", function () {
  leftArrow.style.display = "block";
  rightArrow.style.display = "block";
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
