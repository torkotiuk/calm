// Exampl. - lexical environment //

/* 1
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

const z = 50;
/* 2
  Global env
    Record: {z: 10}
    Parent: null
*/

/* 3
  Записывается в момент объявления функции
  [[Environment]] = Global env
------------------------------------------
  //now will be created
      Global env
        Record: {z: 10, findMatches: <function>}
        Parent: null
*/
function findMatches(array, ...args) {
  /* 6
    findMatches env - создается в момент вызова функции
      Record: {[1, 2, 3, 4, 5], 1, 8, 2, 7}
      Parent: Global env
  */
  const matches = [];
  /* 5
    findMatches env - was created on step '4' 
      Record: {[1, 2, 3, 4, 5], 1, 8, 2, 7, matches = []}
      Parent: Global env
  */
  for (let arg of args) {
    for (let arr of array) {
      if (arr === arg) {
        matches.push(arg);
        /* 6
        findMatches env - was created on step '4' 
          Record: {[1, 2, 3, 4, 5], x = 10, 1, 8, 2, 7, matches = [1, 2]}
          Parent: Global env
        */
      }
    }
  }

  console.log(x);
  /* 7
    findMatches env - was created on step '4' 
      Record: {[1, 2, 3, 4, 5],  1, 8, 2, 7, matches = [1, 2]}
      Parent: Global env
  */
  // 'x' - was founded in 'Parent: Global env': Record: {z: 10, findMatches: <function>, x = 10}, Parent: null
  console.log(z);
  /* 8
    findMatches env - was created on step '4' 
      Record: {[1, 2, 3, 4, 5], 1, 8, 2, 7, matches = [1, 2]}
      Parent: Global env
  */
  // 'z' - was founded in 'Parent: Global env': Record: {z: 10, findMatches: <function>, x = 10}, Parent: null
  return matches;
}

const x = 10;
/* 4
  Global env
    Record: {z: 10, findMatches: <function>, x = 10}
    Parent: null
*/

/* 5
call next function 
*/
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
