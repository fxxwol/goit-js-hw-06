
const input = document.querySelector('#validation-input')
input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length === 6) {
        event.currentTarget.classList.toggle('valid')
        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.remove('invalid')
        }
    }
    else { 
        event.currentTarget.classList.add('invalid')
        if (event.currentTarget.classList.contains('valid')) {
            event.currentTarget.classList.remove('valid')
        }
    }
}