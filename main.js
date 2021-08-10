// let myStorage;

// function login() {
// fetch('https://lca-pointofsales.herokuapp.com//auth', {
//     method: 'post',
//     mode: 'cors',
//     dataType: 'json',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({
//         "username": document.getElementById('email-input'),
//         "password": document.getElementById('password-input')
//     })
// }).then(res => res.json())
//     .then(res => {
//         console.log(res);
//         let myStorage = window.localStorage;
//         console.log(res['access_token']);
//         myStorage.setItem('jwt-token', JSON.stringify(res['access_token']));
//         return myStorage
//     })
// }