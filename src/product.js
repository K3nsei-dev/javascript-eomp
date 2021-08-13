// add products funtion

// function handleSubmit => {

// }

function addProducts() {
    fetch('https://lca-pointofsales.herokuapp.com//add-products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_name: document.getElementById('p_name').value,
            product_type: document.getElementById('p_type').value,
            product_price: document.getElementById('p_price').value,
            product_description: document.getElementById('p_description').value,
            product_image: document.querySelector('.imgurl').src

        }),
        mode: 'cors'
    })
}

// update products function
// function updateProducts() {
//     const name = document.getElementById('p_name').value;
//     const type = document.getElementById('p_type').value;
//     const price = document.getElementById('p_price').value;
//     const description = document.getElementById('p_description').value;
//     const image = document.getElementById('p_image').value;
//     const productID = document.getElementById('p_id').value;

//     fetch('https://lca-pointofsales.herokuapp.com//update-products/`${productID}`', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             product_id: productID,
//             produc_name: name,
//             product_type: type,
//             product_price: price,
//             product_description: description,
//             product_image: image
//         })
//     }).then(res => res.json()).then(data => {
//         console.log(data)
//     })
// }

function addImage() {
    const preview = document.querySelector('.imgurl');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}