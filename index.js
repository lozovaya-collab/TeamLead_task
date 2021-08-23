const sliders = document.querySelector('.feedbacks__slider').children
const sliderWidth = sliders[0].clientWidth
const nextButton = document.querySelector('.feedbacks__switch-next')
const prevButton = document.querySelector('.feedbacks__switch-prev')

const hours = document.querySelector('.order__time_hours__numbers')
const minutes = document.querySelector('.order__time_minutes__numbers')

sliders[0].style.left = '0px'
sliders[1].style.left = `${sliderWidth}px`
sliders[2].style.left = `${sliderWidth * 2}px`


const nextSlider = () => {

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

const setTimer = () => {
    let valueHours = Number(hours.innerHTML)
    let valueMin = Number(minutes.innerHTML)
    if (valueMin === 0 && valueHours === 0) {
        document.querySelector('.order__time_hours').innerHTML = "ВРЕМЯ"
        document.querySelector('.order__time_hours').style.backgroundColor = "rgb(247, 71, 71)"
        document.querySelector('.order__time_minutes').innerHTML = "ВЫШЛО"
        document.querySelector('.order__time_minutes').style.backgroundColor = "rgb(247, 71, 71)"

    } else {
        if (valueMin === 0) {
            valueHours = valueHours - 1
            if (valueHours >= 0 && valueHours <= 10) {
                if (valueHours !== 0) {
                    hours.innerHTML = `0${valueHours - 1}`
                } else {
                    hours.innerHTML = `0${valueHours}`
                }
            } else {
                hours.innerHTML = `${valueHours}`
            }
            minutes.innerHTML = '59'
        } else if (valueMin >= 0 && valueMin <= 10) {
            minutes.innerHTML = `0${valueMin - 1}`
        } else {
            minutes.innerHTML = valueMin - 1
        }
    }
}

nextButton.addEventListener('click', nextSlider)
prevButton.addEventListener('click', prevSlider)

setInterval(setTimer, 1000)

document.querySelector('.order__information_form__inumber').addEventListener('input',
    function(e) {
        this.value = this.value.replace(/[^\d.]/g, '');
    }
)

// Бургер
const burger = document.querySelector('.header__menu_btnBurger')
const menu = document.querySelector('.burger')
const crossBurger = document.querySelector('.burger_btn')
const linkBurger = document.querySelectorAll('.burger_list_item')

let isOpenBurger = false

const openBurger = () => {
    if (!isOpenBurger) {
        menu.style.right = "0"
        isOpenBurger = true
    }
}

const closeBurger = () => {
    if (isOpenBurger) {
        menu.style.right = "-100%"
        isOpenBurger = false
    }
}

burger.addEventListener('click', openBurger)
crossBurger.addEventListener('click', closeBurger)

for (let i = 0; i < linkBurger.length; i++) {
    linkBurger[i].addEventListener('click', closeBurger)
}