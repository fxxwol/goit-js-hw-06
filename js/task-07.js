const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}
refs.span.style.cssText = `font-size: ${refs.input.value}px`

refs.input.addEventListener('input', onInput)

function onInput(event) { 
    refs.span.style.cssText = `font-size: ${event.currentTarget.value}px`
}