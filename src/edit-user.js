function editUser() {
    const name = document.getElementById('first_name').value;
    const surname = document.getElementById('last_name').value;
    const emailInput = document.getElementById('email').value;
    const cellNum = document.getElementById('cell_num').value;
    const passwordInput = document.getElementById('password').value;

    // console.log(name, surname, emailInput, cellNum, passwordInput)

    if (typeof(name) === "number" ||
    typeof(surname) === "number" ||
    typeof(cellNum) === "string") {
        return alert('Please use correct value for each section')
    }

    fetch('https://lca-pointofsales.herokuapp.com//edit-user/' + `${ localStorage.getItem('id') }`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: name,
            last_name: surname,
            email: emailInput,
            cell_num: cellNum,
            password: passwordInput
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        console.log('You have successfully edited the user')
    })
}