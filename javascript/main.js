var gambar = document.querySelectorAll(".panel")
gambar.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeClassActive()
        panel.classList.toggle('active')
    })
})

function removeClassActive() {
    gambar.forEach((panel) => {
        panel.classList.remove('active')
    })
}

var burgerMenu = document.querySelector('.burger-menu')
var nav = document.querySelector('nav')
console.log(nav)
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('rotate')
    if (burgerMenu == document.getElementsByClassName('rotate')[0]) {
        nav.classList.add('stinky')
    } else {

        removeClassStinky()
    }

})
function removeClassStinky() {
    nav.classList.remove('stinky')
}
