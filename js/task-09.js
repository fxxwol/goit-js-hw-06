function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.body,
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color')
}

refs.btn.addEventListener('click', onBtnClick)

function onBtnClick() { 
  const bcgColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${bcgColor}`
  refs.span.textContent = `${bcgColor}`
}