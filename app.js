const slider = document.querySelector('.slider')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const slides = document.querySelectorAll('.slide')
const slideIcons = document.querySelectorAll('.slide-icon')
const numberOfSlides = slides.length
let slideNumber = 0

// manual slide navigation
slideIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // remove 'active' class from every slide and slideIcon
        slides.forEach(slide => {
            slide.classList.remove('active')
        })
        slideIcons.forEach(slideIcon => {
            slideIcon.classList.remove('active')
        })
        // set slide and slideIcon class at current index to 'active'
        slides[index].classList.add('active')
        slideIcons[index].classList.add('active')
        // set currentSlide to index
        slideNumber = index
    })
})

// image slider next button
// on click
nextBtn.addEventListener('click', () => {
    // remove 'active' class from every slide and slideIcon
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slideIcons.forEach(slideIcon => {
        slideIcon.classList.remove('active')
    })
    // increase index
    slideNumber ++
    // if current index is greater than the last index, reset index to 0
    if(slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0
    }
    // set slide and slideIcon class at current index to 'active'
    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')
})

// image slider prev button
// on click
prevBtn.addEventListener('click', () => {
    // remove 'active' class from every slide and slideIcon
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slideIcons.forEach(slideIcon => {
        slideIcon.classList.remove('active')
    })
    // decrease index
    slideNumber --
    // if current index is less than 0, set index to last index
    if(slideNumber < 0) {
        slideNumber = numberOfSlides - 1
    }
    // set slide and slideIcon class at current index to 'active'
    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')
})

// image slider autoplay
// set intial state of variable 'playSlider'
let playSlider
// at a setInterval of 5s...
const autoPlay = () => {
    playSlider = setInterval(() => {
        // remove 'active' class from every slide and slideIcon
        slides.forEach(slide => {
            slide.classList.remove('active')
        })
        slideIcons.forEach(slideIcon => {
            slideIcon.classList.remove('active')
        })
        // increase index
        slideNumber ++
        // if current index is greater than the last index, reset index to 0
        if(slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0
        }
        // set slide and slideIcon class at current index to 'active'
        slides[slideNumber].classList.add('active')
        slideIcons[slideNumber].classList.add('active')
    }, 5000)
}
// run the function
autoPlay()

// stop image slider autoplay on mouseover
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider)
})

// start image slider autoplay on mouseout
slider.addEventListener('mouseout', () => {
    autoPlay()
})