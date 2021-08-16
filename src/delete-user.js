function deleteUser() {
    const id = document.getElementById('id').value;

    if (typeof(id) === "string") {
        return alert('Please Use Correct Values for Each Section')
    }

    fetch('https://lca-pointofsales.herokuapp.com//delete-user/' + `${ localStorage.getItem('id') }`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: id
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You have successfully deleted the user!')
    })
}