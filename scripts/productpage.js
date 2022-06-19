const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// const url = "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine/76";

const url =
  "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine/" + id + "?_embed";

//add second url for related products
const url2 =
  "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?_embed&per_page=3";

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

  //breadcrumb
  document.querySelector(".categoryName").textContent = wine.wine_type;

  document
    .querySelector(".wineCategoryLink")
    .setAttribute("href", `productList.html?category/${wine.categories}`);
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

  document.querySelector(".PPproductimg img").src =
    wine._embedded["wp:featuredmedia"][0].source_url;

  //     document.querySelector(".PPproductimg img").src =
  //       wine._links["wp:featuredmedia"][0].source_url;

  // CHARACTERISTICS

  // LIGHTNESS
  if (wine.light_bold === "1") {
    document.querySelector("#l1").classList.add("red");
  }
  if (wine.light_bold === "2") {
    document.querySelector("#l1").classList.add("red");
    document.querySelector("#l2").classList.add("red");
  }
  if (wine.light_bold === "3") {
    document.querySelector("#l1").classList.add("red");
    document.querySelector("#l2").classList.add("red");
    document.querySelector("#l3").classList.add("red");
  }

  if (wine.light_bold === "4") {
    document.querySelector("#l1").classList.add("red");
    document.querySelector("#l2").classList.add("red");
    document.querySelector("#l3").classList.add("red");
    document.querySelector("#l4").classList.add("red");
  }

  if (wine.light_bold === "5") {
    document.querySelector("#l1").classList.add("red");
    document.querySelector("#l2").classList.add("red");
    document.querySelector("#l3").classList.add("red");
    document.querySelector("#l4").classList.add("red");
    document.querySelector("#l5").classList.add("red");
  }

  // SMOOTHNESS
  if (wine.smooth_tannin === "1") {
    document.querySelector("#s1").classList.add("red");
  }
  if (wine.smooth_tannin === "2") {
    document.querySelector("#s1").classList.add("red");
    document.querySelector("#s2").classList.add("red");
  }
  if (wine.smooth_tannin === "3") {
    document.querySelector("#s1").classList.add("red");
    document.querySelector("#s2").classList.add("red");
    document.querySelector("#s3").classList.add("red");
  }

  if (wine.smooth_tannin === "4") {
    document.querySelector("#s1").classList.add("red");
    document.querySelector("#s2").classList.add("red");
    document.querySelector("#s3").classList.add("red");
    document.querySelector("#s4").classList.add("red");
  }

  if (wine.smooth_tannin === "5") {
    document.querySelector("#s1").classList.add("red");
    document.querySelector("#s2").classList.add("red");
    document.querySelector("#s3").classList.add("red");
    document.querySelector("#s4").classList.add("red");
    document.querySelector("#s5").classList.add("red");
  }

  // DRYNESS
  if (wine.dry_sweet === "1") {
    document.querySelector("#d1").classList.add("red");
  }
  if (wine.dry_sweet === "2") {
    document.querySelector("#d1").classList.add("red");
    document.querySelector("#d2").classList.add("red");
  }
  if (wine.dry_sweet === "3") {
    document.querySelector("#d1").classList.add("red");
    document.querySelector("#d2").classList.add("red");
    document.querySelector("#d3").classList.add("red");
  }

  if (wine.dry_sweet === "4") {
    document.querySelector("#d1").classList.add("red");
    document.querySelector("#d2").classList.add("red");
    document.querySelector("#d3").classList.add("red");
    document.querySelector("#d4").classList.add("red");
  }

  if (wine.dry_sweet === "5") {
    document.querySelector("#d1").classList.add("red");
    document.querySelector("#d2").classList.add("red");
    document.querySelector("#d3").classList.add("red");
    document.querySelector("#d4").classList.add("red");
    document.querySelector("#d5").classList.add("red");
  }

  // ACIDITY
  if (wine.soft_acidic === "1") {
    document.querySelector("#a1").classList.add("red");
  }
  if (wine.soft_acidic === "2") {
    document.querySelector("#a1").classList.add("red");
    document.querySelector("#a2").classList.add("red");
  }
  if (wine.soft_acidic === "3") {
    document.querySelector("#a1").classList.add("red");
    document.querySelector("#a2").classList.add("red");
    document.querySelector("#a3").classList.add("red");
  }

  if (wine.soft_acidic === "4") {
    document.querySelector("#a1").classList.add("red");
    document.querySelector("#a2").classList.add("red");
    document.querySelector("#a3").classList.add("red");
    document.querySelector("#a4").classList.add("red");
  }

  if (wine.soft_acidic === "5") {
    document.querySelector("#a1").classList.add("red");
    document.querySelector("#a2").classList.add("red");
    document.querySelector("#a3").classList.add("red");
    document.querySelector("#a4").classList.add("red");
    document.querySelector("#a5").classList.add("red");
  }
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
  myClone.querySelector(".relatedimg img").src =
    wine._embedded["wp:featuredmedia"][0].source_url;

  //select parent
  const parent = document.querySelector(".related_parent_container");
  //append child
  parent.appendChild(myClone);
}
