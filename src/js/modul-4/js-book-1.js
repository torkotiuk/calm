console.log('Часто callback-функции анонимны и объявляются как стрелочные функции прямо во время передачи.');
// 3 - C
const repeat = function(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};


const labels = [];

repeat(
  
  5, value => {
  labels.push(`Label ${value + 1}`);
}

);

console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]