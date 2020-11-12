"use strict";

const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы"
  ];

  const ulList = document.getElementById("ingredients");
  const foodIngredients = ingredients.forEach(ingredient => {
    const items = document.createElement("li");
    items.innerHTML = ingredient;
    ulList.append(items);
  });

  