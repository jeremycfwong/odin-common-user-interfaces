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


var swiperPrevButton = document.getElementById('swiper-prev')
swiperPrevButton.addEventListener('click', (_) => {
    plusSlides(-1)
})
var swiperNextButton = document.getElementById('swiper-next')
swiperNextButton.addEventListener('click', (_) => {
    plusSlides(1)
})

let slideIndex = 0;
autoUpdate();


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides (slideIndex = n)
}

function autoUpdate(){
    showSlides(slideIndex += 1)
    setTimeout(autoUpdate, 5000);
}

function showSlides(n){
    var imageArray = document.getElementsByClassName('img-swiper-item');
    var dotsButton = document.getElementsByClassName('dot')
    if (n > imageArray.length) {slideIndex = 1}
    if (n < 1) {slideIndex = imageArray.length}

    for (var i = 0; i < imageArray.length; i++){
        imageArray[i].classList.add('hidden')
    }

    for (var i = 0; i < dotsButton.length; i++){
        dotsButton[i].classList.remove('active')
        dotsButton[i].classList.add('hidden')
    }

    imageArray[slideIndex - 1].classList.remove('hidden')
    dotsButton[slideIndex - 1].classList.add('active')
    
}
