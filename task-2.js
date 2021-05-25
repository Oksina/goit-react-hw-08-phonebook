const ulIngredient = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
console.log(ulIngredient);

const Ingr = [];

ingredients.map(ingredient => {
  const createLi = document.createElement("li");
  createLi.textContent = ingredient;
  Ingr.push(createLi);
});

ulIngredient.append(...Ingr);
