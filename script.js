var menuButton = document.getElementById('nav-button')

menuButton.addEventListener('click', (_) => {
    var svgLogo = document.getElementById('menu')
    var svgLogo2 = document.getElementById('close')
    var menu = document.getElementById('nav-item-container')
    toggleHidden(svgLogo)
    toggleHidden(svgLogo2)
    toggleHidden(menu) 
})

function toggleHidden(element) {
    if (element.classList.value == 'hidden'){
        element.classList.remove('hidden')
    } else{
        element.classList.add('hidden')
    }
}

