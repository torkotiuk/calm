const inventors = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
},
{
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
},
{
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
},
{
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
},
{
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
},
{
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
},
{
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
},
{
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
},
{
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
},
{
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
},
{
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
},
{
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}
];
// - Вывести массив имён учёных/изобретателей
// - Вывести массив тех кто родился в 19-ом веке
// - Вывести массив тех, кто прожил больше 50-ти лет
// - Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа
// - Вывести фамилии тех, в чьём имени есть буква "е"
// - Получить массив объектов отсортированный по имени (по алфавиту).
// - Найти сумму лет жизни всех учёных

// 1
const getNames = function(inventors) {
  const allNames = [];
  for (const inventor of inventors) {
    // console.log(`${inventor.first} ${inventor.last}`);
    allNames.push(`${inventor.first} ${inventor.last}`);
  }
  return allNames;
}
// getNames(inventors);
// console.log(getNames(inventors));

// 2
// v-1
// const getBorn = function(inventos) {
//   const allBorn = [];
//   for (const inventor of inventors) {
//     if (inventor.year > 1800 && inventor.year <= 1900) {
//       allBorn.push(inventor);
//     }
//   }
//   return allBorn;
// }
// console.log(getBorn(inventors));

// v-2 - create new object
// const getBorn = function(inventos) {
//   const allBorn = [];
//   for (const inventor of inventors) {
//     if (inventor.year > 1800 && inventor.year <= 1900) {
//       const newObjInventors = {...inventor};
//       delete newObjInventors.passed;
//       allBorn.push(newObjInventors);
//     }
//   }
//   return allBorn;
// }
// console.log(getBorn(inventors));

//v-3
const getBorn = function(inventos) {
  // const allBorn = [];
  const bornNames = [];
  for (const inventor of inventors) {
    if (inventor.year > 1800 && inventor.year <= 1900) {
      const newObjInventors = {...inventor};
      delete newObjInventors.passed;
      // allBorn.push(newObjInventors);
      bornNames.push(inventor.first);
    }
  }
  // return allBorn;
  return bornNames;

}
console.log(getBorn(inventors));