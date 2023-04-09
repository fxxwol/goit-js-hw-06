function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls > input'),
  divBoxes : document.querySelector('#boxes')
}

refs.createBtn.addEventListener('click', event => {
  console.log(refs.input.value)
  createBoxes(refs.input.value)
})
refs.destroyBtn.addEventListener('click', destroyBoxes)

const createBox = (size, bcgColor) => `<div style="width: ${size}px; height: ${size}px; background-color: ${bcgColor};"></div>`;

function createBoxes(amount) {
  let size = 20;
  const boxesCollection = [];
  for (let i = 0; i < amount; i++) {
    size += 10;
    boxesCollection.push(createBox(size, getRandomHexColor()));
  }
  refs.divBoxes.insertAdjacentHTML('beforeend', boxesCollection.join(''))
}

function destroyBoxes() { 
  refs.divBoxes.innerHTML = ""
}