let base_URL = "https://lca-pointofsales.herokuapp.com//view-products";

let cartProduct = [];

let cart = [];

let products;

// view product function
function getProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      cartProduct = data;

      // console.log(cartProduct);

      products = data.data;

      renderProducts(products);
    });
}

getProducts(base_URL);

function renderProducts(products) {
  let container = document.querySelector("#view-products");

  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `<div class='products-container'>
      <img src='${product[5]}' class='productImage'></img>
      <div class="productID">Product ID: ${product[0]}</div>
      <div class='productName'>Product Name: ${product[1]}</div>
      <div class='productCategory'>Category: ${product[2]}</div>
      <div class='productPrice'>Price: R${product[3]}</div>
      <div class="productDescription"><p>Product Description:</p> ${product[4]}</div>
      <div class="button" ><button class="btn" onclick="addProduct(${product[0]})">Add To Cart</button></div>`;
  });
}

function createCart(cartItems) {
  let container = document.querySelector('#cart');

  container.innerHTML = "";

  if (cartItems.length > 0) {
    cartItems.map(cartItem => {
      container.innerHTML += `<div class='products-container'>
      <img src='${cartItem[5]}' class='productImage'></img>
      <div class="productID">Product ID: ${cartItem[0]}</div>
      <div class='productName'>Product Name: ${cartItem[1]}</div>
      <div class='productCategory'>Category: ${cartItem[2]}</div>
      <div class='productPrice'>Price: R${cartItem[3]}</div>
      <div class="productDescription"><p>Product Description:</p> ${cartItem[4]}</div>
      <button id="remove-item">Remove Item</button></div>`;
    })
    
    let accumulatedPrice = cartItems.reduce((total, item) => total + item[3], 0)
    
    container.innerHTML += `<h2>Total Price:</h2> ${ accumulatedPrice }`

    let remove = document.getElementById('remove-item')

    remove.addEventListener('click', (id) => {
      let product = cartProduct.data.find((item) => {
        return item[0] == id;
      });

      // console.log(product)
      cart.pop(product);
      // console.log(cart)
    
      let lesserPrice = cartItems.reduce((total, item) => total - item[3], 0)
      
      container.innerHTML = '';
      
      container.innerHTML += `<h2>Total Price:</h2> ${ lesserPrice }`
    })
  } else {
    container.innerHTML = "<h2>No Items In Cart</h2>";
  }
}

function addProduct(id) {
  let product = cartProduct.data.find((item) => {
    return item[0] == id;
  });
  console.log(product);
  cart.push(product);
  console.log(cart);
  // console.log("hello");
  createCart(cart)
}

function searchProducts() {
  let searchTerm = document.querySelector('#searchTerm').value;

  // console.log(cartProduct)

  console.log(searchTerm)

  let searchedItems = cartProduct.data.filter((item) => {
    return item[1].toLowerCase().includes(searchTerm.toLowerCase());
  })
  
  console.log(searchedItems)
  // console.log(cartProduct)

  if (searchedItems.length == 0) {
    document.querySelector("#view-products").innerHTML = "<h2>There Are No Products of that Description</h2>"
  } else {
    renderProducts(searchedItems)
  }

}

function sortAscending() {
  let ascendingProducts = cartProduct.data.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  })
  renderProducts(ascendingProducts);
}

function sortDescending() {
  let ascendingProducts = cartProduct.data.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  })

  ascendingProducts.reverse();
  renderProducts(ascendingProducts);
}

function sortPriceAscending() {
  let sortedProducts = products.sort((a, b) => a[3] - b[3]).reverse();
  renderProducts(sortedProducts)
}

function sortPriceDescending() {
  let sortedProducts = products.sort((a, b) => a[3] - b[3]);
  renderProducts(sortedProducts)
}

function clearFilter() {
  getProducts(base_URL)
}

function toggleCart() {
  document.querySelector('#cart').classList.toggle('active');
}