const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients")

const makeLiEl = name => { 
  const liEl = document.createElement("li")
  liEl.textContent = name
  liEl.classList.add("item")
  return liEl
}

const allLiEl = ingredients.map(makeLiEl)
ingredientsEl.append(...allLiEl)