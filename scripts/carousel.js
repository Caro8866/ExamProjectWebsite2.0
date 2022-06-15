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

/* Categories */
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("category");

const url = `https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/categories`;

/* https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?categories=4 */

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    wineCategories(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function wineCategories(wine) {
  wine.forEach(wineCategory);
  console.log("no");
}

function wineCategory() {
  console.log("yes");

  document
    .querySelector(".white")
    .setAttribute("href", `productlist.html?categories=3`);

  document
    .querySelector(".red")
    .setAttribute("href", `productlist.html?categories=8`);

  document
    .querySelector(".rose")
    .setAttribute("href", `productlist.html?categories=5`);

  document
    .querySelector(".cremant")
    .setAttribute("href", `productlist.html?categories=6`);
  document
    .querySelector(".champagne")
    .setAttribute("href", `productlist.html?categories=4`);
}
