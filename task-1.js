const elements = document.querySelectorAll(`.item`);
//console.log(elements);
//console.dir(elements)
console.log(`В списке ${elements.length} категорий`);
elements.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastElementChild.children.length}`
  );
});
