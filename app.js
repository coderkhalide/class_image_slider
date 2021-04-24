const slides = document.querySelectorAll('.slide')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
let currentSlide = 0

const changeSlider = () => {
    slides.forEach((slide, index) => {
        if(slide.classList.contains('active')) currentSlide = index
    })
    slides[currentSlide].classList.remove('active')
    if(currentSlide === (slides.length - 1)) slides[0].classList.add('active')
    else slides[currentSlide + 1].classList.add('active')
}

let interval = setInterval(changeSlider, 5000)

const nextSlider = () => {
    clearInterval(interval)
    slides[currentSlide].classList.remove('active')

    if(currentSlide === (slides.length - 1)) {
        slides[0].classList.add('active')
        currentSlide = 0
    }
    else {
        slides[currentSlide + 1].classList.add('active')
        currentSlide = currentSlide + 1
    }
    interval = setInterval(changeSlider, 5000)
}

const previousSlider = () => {
    clearInterval(interval)
    slides[currentSlide].classList.remove('active')

    if(currentSlide === 0) {
        slides[slides.length - 1].classList.add('active')
        currentSlide = slides.length - 1
    }
    else {
        slides[currentSlide - 1].classList.add('active')
        currentSlide = currentSlide - 1
    }
    interval = setInterval(changeSlider, 5000)
}

previous.addEventListener('click', previousSlider)
next.addEventListener('click', nextSlider)