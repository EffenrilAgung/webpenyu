var gambar = document.querySelectorAll(".panel")
gambar.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeClassActive()
        panel.classList.add('active')
    })
})

function removeClassActive() {
    gambar.forEach((panel) => {
        panel.classList.remove('active')
    })

}

var burgerMenu = document.querySelector('.burger-menu')
var boxMenu = document.querySelectorAll(".box")
burgerMenu.addEventListener('click', () => {
    burgerMenu += 1
    console.log(typeof (burgerMenu))
    if (burgerMenu === String) {
        burgerMenu.style.transform = 'rotate(90deg)'
    }
})
