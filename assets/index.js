const header = document.getElementById('header')
const button = document.getElementById('button')

function toggleClass (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

button.addEventListener('click', () => {
    toggleClass(header, 'menu-active')
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})

if (
    location.pathname.startsWith('/salas') ||
    location.pathname.startsWith('/duvidas')
) {
    const buttons = document.getElementsByClassName('btn')

    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i]
        element.addEventListener('click', e => {
            const { parentNode } = e.currentTarget

            toggleClass(parentNode, 'active');
        })
    }
}
