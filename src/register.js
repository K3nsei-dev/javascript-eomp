function registerUser() {
    const name = document.getElementById('first_name').value;
    const surname = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const cell = document.getElementById('cell_num').value;
    const password = document.getElementById('password').value;

    console.log(name, surname, email, cell, password)

    fetch('https://lca-pointofsales.herokuapp.com//register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: name,
            last_name: surname,
            email: email,
            cell_num: cell,
            password: password
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log("You have succesfully registered")

        if (data['message'] == 'Success') {
            alert("Please Sign In On Next Page")
            window.location.href = "./login.html"
        } else {
            alert('Please FIll In The Required Fields Correctly')
        }
    })
}