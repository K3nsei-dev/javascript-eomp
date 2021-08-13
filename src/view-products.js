let base_URL = "https://lca-pointofsales.herokuapp.com//view-products";

// view product function
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
          <div class="productID">Product ID: ${ product[0] }</div>
          <div class='productName'>Product Name: ${product[1]}</div>
          <div class='productCategory'>Category: ${product[2]}</div>
          <div class='productPrice'>Price: R${product[3]}</div>
          <div class="productDescription"><p>Product Description:</p> ${product[4]}</div>
          <div class="button"><button class="btn">Add To Cart</button> <input type="number" id="quantity" name="quantity" min="1" max="5"></div>`
      });
    });
}

getProducts(base_URL);