const autoSlideshow = () => {
    const slides = document.querySelectorAll('.slides img')
    const slideDelay = 6000
    let currentSlide = 0

    slides[currentSlide].classList.add('active')
    
    const nextSlide = () => {
        const tempCounter = currentSlide
        slides[tempCounter].style.zIndex = 0
        setTimeout(() => {
            slides[tempCounter].classList.remove('active')
        }, 2500)
        currentSlide = (currentSlide + 1) % slides.length
        slides[currentSlide].style.zIndex = 1
        slides[currentSlide].classList.add('active')
    }

    setInterval(nextSlide, slideDelay)
}

const changeSlide = () => {
    const slides = document.querySelectorAll('.slides img')
    const dots = document.querySelectorAll('.dots .dot')

    const selectSlide = (index) => {
        slides[index].classList.toggle('active')
        dots[index].classList.toggle('active')
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            console.log('CLICKED')
            selectSlide(index)
            currentSlide = index
        })
    })
}
 
autoSlideshow()
changeSlide()
