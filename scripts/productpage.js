const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// const url = "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine/76";

const url = "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine/" + id;

//add second url for related products
const url2 =
  "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?per_page=3&?_embed";

//fetch the data for both
fetch(url)
  .then((res) => res.json())
  .then((data) => showWine(data));

fetch(url2)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

//populate the page
function showWine(wine) {
  console.log(wine);
  // name
  document.querySelector(".PPtitle").textContent = wine.title.rendered;

  // year
  document.querySelector(".PPyear").textContent = wine.year;

  // name
  document.querySelector(".PPname").textContent = wine.title.rendered;

  // price
  document.querySelector(".PPprice").textContent = `DKK ${wine.price}`;

  // availiability
  // document.querySelector(
  //   ".PPavailability"
  // ).textContent = `${wine.availibility} bottles left`; //need to do in wp

  // description
  document.querySelector(".PPdescription").textContent = wine.description;

  // region
  document.querySelector(".PPregion").textContent = wine.region;

  // vineyard
  document.querySelector(".PPvineyard").textContent = wine.wineyard;

  // grapes
  document.querySelector(".PPgrapes").textContent = wine.grapes;

  // notes
  document.querySelector(".PPnotes").textContent = wine.notes;

  // recommended with
  document.querySelector(".PPrecommended").textContent = wine.recommended_with;

  document.querySelector(".PPproductimg a img").src =
    wine["wp:featuredmedia"][0].source_url;

  //     document.querySelector(".PPproductimg img").src =
  //       wine._links["wp:featuredmedia"][0].source_url;
}

//for each items in the related products list
function handleProductList(data) {
  //function needs different name from api.js to work
  //console.log(data);
  data.forEach(showProductList);
}

// function for related products

function showProductList(wine) {
  console.log(wine);
  //grab template
  const template = document.querySelector(".related_template").content;

  //clone it
  const myClone = template.cloneNode(true);
  //change data

  //name
  myClone.querySelector(".relatedTitle").textContent = wine.title.rendered;

  //link to specific product
  myClone
    .querySelector(".borderB")
    .setAttribute("href", `productPage.html?id=${wine.id}`);
  console.log(myClone.querySelector(".borderB"));

  //price
  myClone.querySelector(".relatedPrice").textContent = `DKK ${wine.price}`;

  // //image
  // myClone.querySelector(".relatedimg img").src =
  //   wine["wp:featuredmedia"][0].source_url;

  //select parent
  const parent = document.querySelector(".related_parent_container");
  //append child
  parent.appendChild(myClone);
}
