// start NavBar

let Nav = document.querySelector(".drob-hover");

window.onscroll = function () {
  if (this.scrollY > 100) {
    Nav.classList.add("active")
  } else {
    Nav.classList.remove("active")
  }
};

// // end NavBar


// start slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  // autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 6,
    },
  },
});
// end slider

// start swiber
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  // autoplay: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

// end swiber





let title = document.querySelector(".title");
let downtwo = document.querySelector(".title-two");
// let titleI = document.querySelector(".title i")
let Ione = document.querySelector(".down-one");
let Itwo = document.querySelector(".down-two");
let Ithree = document.querySelector(".down-three");
let Ifour = document.querySelector(".down-four");
let Ifive = document.querySelector(".down-five");
let Isix = document.querySelector(".down-six");
let Iseven = document.querySelector(".down-seven");

let downthree = document.querySelector(".title-three");
let downfour = document.querySelector(".title-four");
let downfive = document.querySelector(".title-five");
let downSix = document.querySelector(".title-six");
let downSeven = document.querySelector(".title-seven");
let enwanSlide = document.querySelector(".enwan-slide");

let DisplayOne = document.querySelector(".div-diplay-one");
let Displaytwo = document.querySelector(".div-diplay-two");
let Displaythree = document.querySelector(".div-diplay-three");
let Displayfour = document.querySelector(".div-diplay-four");
let Displayfive = document.querySelector(".div-diplay-five");
let Displaysix = document.querySelector(".div-diplay-six");
let Displayseven = document.querySelector(".div-diplay-seven");
let boxSlideAlllDisplay = document.querySelector(".box-slide-alll-display");

title.onclick = function () {
  // DisplayOne.classList.toggle("active");
  $(".div-diplay-one").toggle(500);
  Ione.classList.toggle("active");
};

downtwo.onclick = function () {
  // Displaytwo.classList.toggle("active");
  $(".div-diplay-two").toggle(700);
  Itwo.classList.toggle("active");
};

downthree.onclick = function () {
  // Displaythree.classList.toggle("active");
  $(".div-diplay-three").toggle(700);
  Ithree.classList.toggle("active");
};

downfour.onclick = function () {
  // Displayfour.classList.toggle("active");
  $(".div-diplay-four").toggle(700);
  Ifour.classList.toggle("active");
};

downfive.onclick = function () {
  // Displayfive.classList.toggle("active");
  $(".div-diplay-five").toggle(700);
  Ifive.classList.toggle("active");
};

downSix.onclick = function () {
  // Displaysix.classList.toggle("active");
  $(".div-diplay-six").toggle(700);
  Isix.classList.toggle("active");
};

downSeven.onclick = function () {
    // Displayseven.classList.toggle("active")
    $(".div-diplay-seven").toggle(1000);
    Iseven.classList.toggle("active")
}

// enwanSlide.onclick = function () {
//     boxSlideAlllDisplay.classList.toggle("active")
// }





