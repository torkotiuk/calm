const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach(ref => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ref;
  ingredientsRef.append(itemRef);
});
