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
