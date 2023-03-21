
const form = document.querySelector('#newsletter')
let inputEmail = document.querySelector('#email')
let btn = document.querySelector('#button')

const subscribe = (event) => {
    event.preventDefault()
    let email = document.querySelector('#email')
    let value = email.value
    form.textContent = `
    Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${value}
    `
}

const checkEmail = (event) => {
    if ((inputEmail.value === '') || ((inputEmail.value).includes('@') === false)) {
        inputEmail.classList.add('email--blank')
        btn.disabled = true
        btn.classList.add('button--disabled')
    } else {
        inputEmail.classList.remove('email--blank')
        btn.disabled = false
        btn.classList.remove('button--disabled')
    }
}

form.addEventListener('submit', (event) => subscribe(event))
inputEmail.addEventListener('input', (event) => checkEmail(event))
