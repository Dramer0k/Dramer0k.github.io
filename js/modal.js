/* Test Git */
let registration = document.getElementById('login');

registration.classList= function () {
    login.color = 'red'
}
let call = document.getElementById('connection')
let callBlock = document.getElementById('connection-block')

call.onclick = function() {
    console.log('Open!')
    callBlock.classList.toggle('open')
}