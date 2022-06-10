// burger menu
const showNav = () => {
  const burger = document.querySelector(".burger_menu");
  const nav = document.querySelector(".list_menu_burger");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    nav.classList.toggle("list_menu_active");
    line1.classList.toggle("line1_active");
    line2.classList.toggle("line2_active");
    line3.classList.toggle("line3_active");
  });
};

showNav();

/* Owel carousel*/

/* const prevIcon = '<img src-"./prev.png" alt:"previous">';
const nextIcon = '<img src-"./next.png" alt:"next">'; */

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        /*  navText: [prevIcon, nextIcon], */
        loop: true,
        dots: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },

      800: {
        items: 3,
        nav: true,
        loop: true,
      },

      1000: {
        items: 4,
        nav: true,
        loop: true,
      },
      1200: {
        items: 5,
        nav: false,
        loop: false,
      },
    },
  });
});
