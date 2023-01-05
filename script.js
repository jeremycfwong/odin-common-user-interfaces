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
    swiperButtonLogic('previous')
})
var swiperNextButton = document.getElementById('swiper-next')
swiperNextButton.addEventListener('click', (_) => {
    swiperButtonLogic('next')
})

function swiperButtonLogic(action){
    var imageArray = document.getElementsByClassName('img-swiper-item');
    var target = 0;
    for (var i = 0; i < imageArray.length; i++){
        if (!imageArray[i].classList.contains('hidden')){
            imageArray[i].classList.add('hidden')
            if(action == 'previous'){
                if(i == 0){
                    target = 3
                } else{
                    target = i - 1
                }
            } else {
                if(i == 3){
                    target = 0
                } else{
                    target = i + 1
                }
            }
            
            break
        }
    }
    imageArray[target].classList.remove('hidden')
}
