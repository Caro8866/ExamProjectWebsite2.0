// Database integration

//   "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?_embed";

window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

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
}

//POPULATE PAGE
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
