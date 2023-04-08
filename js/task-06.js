const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    event.currentTarget.value.length <= 6 ?
        event.currentTarget.classList.add('valid') :
        event.currentTarget.classList.add('invalid')
}