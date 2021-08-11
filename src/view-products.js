let base_URL = "https://lca-pointofsales.herokuapp.com//view-products";

function getProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let products = data.data;

      // console.log(products)

      let container = document.querySelector("#view-products");

      container.innerHTML = "";

      products.forEach((product) => {
          container.innerHTML += `<div class='products-container'><img src='${ product[5] }' class='productImage'></img>
          <div class='productName'>${product[1]}</div>
          <div class='productCategory'>${product[2]}</div>
          <div class='productPrice'>R${product[3]}</div>
          <div>${product[4]}</div><div>
          <button>Add To Cart</button>`
      });
    });
}

getProducts(base_URL);