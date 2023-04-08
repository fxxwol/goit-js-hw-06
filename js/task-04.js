const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
}
let counterValue = 0;
refs.decrement.addEventListener('click', onDecrementClick)
refs.increment.addEventListener('click', onIncrementClick)

function onDecrementClick(){ 
    counterValue--
    refs.span.textContent = counterValue
}

function onIncrementClick() {
    counterValue++
    refs.span.textContent = counterValue
}