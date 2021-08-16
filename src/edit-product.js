// update products function
function updateProducts() {
    const productID = document.getElementById('u_id').value;
    const name = document.getElementById('u_name').value;
    const pType = document.getElementById('u_type').value;
    const price = document.getElementById('u_price').value;
    const description = document.getElementById('u_description').value;
    const image = document.querySelector('.imgurl').src;

    // console.log(name, type, price, description, image, productID)

    // if (typeof(name) === "number" ||
    // typeof(pType) === "number") {
    //     return alert('Please Use Correct Value for Each Section')
    // }

    // if (productID.length() == 0) {
    //     return alert('please fill in each section')
    // }

    fetch('https://lca-pointofsales.herokuapp.com/update-products/' + `${ productID }`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_name: name,
            product_type: pType,
            product_price: price,
            product_description: description,
            product_image: image
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("You have successfully changed a product")

        if (data['message'] == "Updated Products") {
            alert('You have successfully updated a product! Please see products page!')
            window.location.href = '/view-products.html'
        }
    })
}

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