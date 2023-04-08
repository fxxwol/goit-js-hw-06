const categoriesEl = document.querySelector('#categories')
const allCategoryLiEl = Array.from(categoriesEl.children)
const countCategories = allCategoryLiEl.length
console.log(`Number of categories: ${countCategories}`)

console.log(allCategoryLiEl)

allCategoryLiEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.firstElementChild.nextElementSibling.children.length}`)
});