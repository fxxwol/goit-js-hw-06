const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', onInput)
function onInput(event) { 
    if (event.currentTarget.value != "") {
        refs.span.textContent = event.currentTarget.value
    }
    else { 
        refs.span.textContent = "Anonymus"
    }
}