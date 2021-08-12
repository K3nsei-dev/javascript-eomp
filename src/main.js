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
        
        if (res['access_token'] == res['access_token']) {
            window.location.href = "./user.html"
        }
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

// getting user profile
// const user_id = product.data[0]
// console.log(user_id)
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

// generating user info 
// const user_Info = "https://lca-pointofsales.herokuapp.com/user-profile/${user_id}"
// function userInfo(){
//     fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         let user = res.data

//         let user_id = res.data[0]

//         let container = document.querySelector('.user-info')

//         container.innerHTML = '';


//     })
// }

// add products funtion
function addProducts() {
    const name = document.getElementById('p_name').value;
    const type = document.getElementById('p_type').value;
    const price = document.getElementById('p_price').value;
    const description = document.getElementById('p_description').value;
    const image = document.getElementById('p_image').value;
    fetch('https://lca-pointofsales.herokuapp.com//add-products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            produc_name: name,
            product_type: type,
            product_price: price,
            product_description: description,
            product_image: image
        })
    })
}

function updateProducts() {
    const name = document.getElementById('p_name').value;
    const type = document.getElementById('p_type').value;
    const price = document.getElementById('p_price').value;
    const description = document.getElementById('p_description').value;
    const image = document.getElementById('p_image').value;
    fetch('https://lca-pointofsales.herokuapp.com//update-products/{product_id}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            produc_name: name,
            product_type: type,
            product_price: price,
            product_description: description,
            product_image: image
        })
    })
}