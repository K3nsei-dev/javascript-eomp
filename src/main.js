// assigning variable to local storage
const myStorage = window.localStorage;

// login function
function login() {
    const username = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    console.log(username, password)
fetch('https://lca-pointofsales.herokuapp.com//auth', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: username,
        password: password
    })
}).then(res => res.json())
    .then(res => {
        console.log(res);
        console.log(res['access_token'])
        myStorage.setItem('jwt-token', res['access_token'])
        console.log('Successful')
    })
}

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
          <div class='productName'>${product[1]}</div>
          <div class='productCategory'>${product[2]}</div>
          <div class='productPrice'>R${product[3]}</div>
          <div>${product[4]}</div><div>
          <button class="btn">Add To Cart</button>`
      });
    });
}

getProducts(base_URL);

// // getting user profile
// fetch('https://lca-pointofsales.herokuapp.com/user-profile/{user_id}', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `jwt ${myStorage}`
//     },
//     mode: 'cors',
// }).then(res => res.json)
//     .then(res => {
//         console.log(res)
//     })