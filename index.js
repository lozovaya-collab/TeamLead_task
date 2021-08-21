const sliders = document.querySelector('.feedbacks__slider').children
const sliderWidth = sliders[0].clientWidth
const nextButton = document.querySelector('.feedbacks__switch-next')
const prevButton = document.querySelector('.feedbacks__switch-prev')

sliders[0].style.left = '0px'
sliders[1].style.left = `${sliderWidth}px`
sliders[2].style.left = `${sliderWidth * 2}px`


const nextSlider = () => {
    console.log('sdfg');
    if (sliders[2].style.left !== `0px`) {
        prevButton.removeAttribute('disabled')
        prevButton.classList.toggle('inactive-button')
        prevButton.classList.toggle('active-button')

        let first_slider = Number(sliders[0].style.left.slice(0, -2))
        let second_slider = Number(sliders[1].style.left.slice(0, -2))
        let third_slider = Number(sliders[2].style.left.slice(0, -2))

        sliders[0].style.left = `${first_slider - sliderWidth}px`
        sliders[1].style.left = `${second_slider - sliderWidth}px`
        sliders[2].style.left = `${third_slider - sliderWidth}px`

    }
    if (sliders[2].style.left === `0px`) {
        prevButton.classList.toggle('inactive-button')
        nextButton.setAttribute('disabled', 'disabled')
        nextButton.classList.toggle('inactive-button')
        nextButton.classList.toggle('active-button')
    }
}


const prevSlider = () => {
    if (sliders[0].style.left !== `0px`) {

        nextButton.removeAttribute('disabled')
        nextButton.classList.toggle('inactive-button')
        nextButton.classList.toggle('active-button')

        let first_slider = Number(sliders[0].style.left.slice(0, -2))
        let second_slider = Number(sliders[1].style.left.slice(0, -2))
        let third_slider = Number(sliders[2].style.left.slice(0, -2))

        sliders[0].style.left = `${first_slider + sliderWidth}px`
        sliders[1].style.left = `${second_slider + sliderWidth}px`
        sliders[2].style.left = `${third_slider + sliderWidth}px`

    }

    if (sliders[0].style.left === `0px`) {
        nextButton.classList.toggle('inactive-button')
        prevButton.setAttribute('disabled', 'disabled')
        prevButton.classList.toggle('inactive-button')
        prevButton.classList.toggle('active-button')
    }


}

nextButton.addEventListener('click', nextSlider)
prevButton.addEventListener('click', prevSlider)