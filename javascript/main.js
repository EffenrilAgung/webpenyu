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

// Smooth scroll

// window.addEventListener('scroll', function () {
//     const scrollUp = window.pageYOffset

//     console.log(stinky.scrollTop += 1000)
// })

var navigasi = document.querySelectorAll('li')
var link = document.querySelectorAll('a')
var artikel = document.querySelectorAll('article')

window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolller', window.scrollY >= 901)
    nav.classList.toggle('scrolllerMobile', window.scrollY >= 790)

})
navigasi.forEach((i) => {
    i.addEventListener('click', function () {
        x(window.scrollY - 800)
    })
})
function x(value) {
    artikel.forEach((i) => {
        i.addEventListener('scroll', () => {
            window.scrollY - 600
        })
    })
    return value
}
console.log(x)