const categoryRef = document.querySelector('#categories');
console.log(`В списке ${categoryRef.children.length} категории`);

const categoryChildrenRef = Array.from(categoryRef.children);

categoryChildrenRef.map(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log('-----------------');
  console.log(`Категория: ${categoryTitle}`);

  const elementsQuantity = category.querySelector('ul').children.length;
  console.log(`Количество элементов: ${elementsQuantity}`);
});
