// Database integration

//   "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?_embed";

window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadWines();
}
// FETCH DATA
async function loadWines() {
  const response = await fetch(
    "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?_embed&per_page=20"
  );
  const data = await response.json();
  displayData(data);
  displayBreadcrumb(data);
}

//POPULATE PAGE

function displayBreadcrumb(wine) {
  document.querySelector(".categoryName").textContent = wine.wine_type;

  if ((wine.wine_type = 1))
    document.querySelector(".categoryName").textContent = "Champagne";
}

function displayData(wines) {
  console.log(wines);

  wines.forEach((wine) => {
    // GRAB TEMPLATE
    const templateEl = document.querySelector(".productCard").content;

    // CLONE TEMPLATE
    const clone = templateEl.cloneNode(true);

    // CHANGE CONTENT
    clone.querySelector(".productName").textContent = wine.title.rendered;
    clone.querySelector(".productPrice").textContent = `DKK ${wine.price}`;

    clone.querySelector(".viewBtn").href = "productPage.html?id=" + wine.id;

    // image
    clone.querySelector(".productImage").src =
      wine._embedded["wp:featuredmedia"][0].source_url;

    // GRAB PARENT
    const parent = document.querySelector(".products_grid");

    // APPEND PARENT
    parent.appendChild(clone);
  });
}
