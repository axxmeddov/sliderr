let move = 0
let sliderLine = document.querySelector('.slider-line')

document.querySelector('.btn-next').addEventListener('click' , function () {
    move += 256 
        if (move > 768) {
            move = 0
        }
    sliderLine.style.left = -move + 'px'
        
})

document.querySelector('.btn-back').addEventListener('click' , function () {
    move -= 256 
        if (move < 0 ) {
            move = 768
        }
    sliderLine.style.left = -move + 'px'
        
})