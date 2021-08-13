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

