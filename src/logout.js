let button = document.getElementById('logout');

button.addEventListener("click", function() {
    alert('You have logged out!')
    window.localStorage.removeItem('jwt-token');
    window.localStorage.removeItem('userID')
    window.location.href = '/login.html'
}, true)