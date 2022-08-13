window.addEventListener("scroll", function() {
    var navbar = document.querySelector('nav')
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

console.log('salom');

// information ------------------------------------

var btn = document.querySelector('#btn')
var ich = document.querySelector('#ich')
var btn1 = document.querySelector('#btn1')
var ich1 = document.querySelector('.ich1')

btn.addEventListener('click', () => {
    ich.classList.add('block')
    btn1.style.display = 'block'
})

btn1.addEventListener('click', () => {
    ich1.classList.add('block1')
})