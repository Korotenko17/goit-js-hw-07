"use strict";

const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы"
  ];

// const ulList = document.querySelector('#ingredients');
// function createElement(arr) {
//     let itemsArr = [];
//     arr.forEach(item => {
//         const items = document.createElement('li');
//         items.textContent = item;
//         itemsArr.push(items);
//     });
//     return ulList.prepend(...itemsArr);
// createElement(ingredients);
// }

const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingridient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingridient;
    itemEl.style.listStyle = 'none';
    return itemEl;
});
ingredientsList.append(...elements);
console.log(ingredientsList);
