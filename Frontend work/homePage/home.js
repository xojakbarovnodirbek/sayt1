window.addEventListener("scroll", function() {
    var navbar = document.querySelector('nav')
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

console.log('salom');

// -------------------------------------------


var bars = document.querySelector('.bars')
var list = document.querySelector('.list')

setTimeout(() => {
    bars.addEventListener('click', () => {
        list.classList.add('add')
    })
},1000);