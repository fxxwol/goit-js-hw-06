const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInput)
function onInput(event) { 
    event.currentTarget.value != "" ?
        refs.span.textContent = event.currentTarget.value :
        refs.span.textContent = "Anonymus"
}