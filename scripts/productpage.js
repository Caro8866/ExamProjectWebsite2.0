const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// const url = "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine/76";

const url = "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine/" + id;

//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showWine(data));
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

function characteristicsWine(characteristics) {
  console.log(characteristics);
}

/* var light = document.getElementById("#light"); */
