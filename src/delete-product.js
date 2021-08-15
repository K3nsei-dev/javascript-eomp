function deleteProduct() {
    const productID = document.getElementById('id').value;
    console.log(productID)
    fetch('https://lca-pointofsales.herokuapp.com//delete-product/' + `${ productID }`, {
        method: 'POST',
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You Successfully deleted the product')

        if (data['message'] == 'Product Deleted Successfully') {
            alert('You successfully deleted the product! Please see confirmation on products page!')
            window.location.href = '/view-products.html'
        } else {
            alert('Error in form! Please revisit')
        }
    })
}