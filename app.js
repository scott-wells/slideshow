const autoSlideshow = () => {
    const slides = document.querySelectorAll('.slides img')
    const slideDelay = 6000
    let currentSlide = 0

    slides[currentSlide].style.opacity = 1 

    const nextSlide = () => {
        slides[currentSlide].style.opacity = 0
        currentSlide = (currentSlide + 1) % slides.length
        slides[currentSlide].style.opacity = 1
    }

    setInterval(nextSlide, slideDelay)
}
// const autoSlideshow = () => {
//     const slides = document.querySelectorAll('.slides img')
//     const slideDelay = 6000
//     let currentSlide = 0

//     slides[currentSlide].classList.add('.active')

//     const nextSlide = () => {
//         slides.forEach(slide => {
//             slide.classList.remove('.active')
//         })
//         currentSlide = (currentSlide + 1) % slides.length
//         slides[currentSlide].classList.add('.active')
//     }

//     setInterval(nextSlide, slideDelay)
// }

// const changeSlide = () => {
//     const slides = document.querySelectorAll('.slides img')
//     const dots = document.querySelectorAll('.dots .dot')

//     const selectSlide = (index) => {
//         slides[index].classList.toggle('.active')
//         dots[index].classList.toggle('.active')
//     }

//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             selectSlide(index)
//             currentSlide = index
//         })
//     })
// }
 
autoSlideshow()
// changeSlide()
