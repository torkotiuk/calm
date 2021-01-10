// Напишите ф-цию конструктор, которая будет создавать 
// избирателя (name);

// У избирателя будет метод vote(presidentName) который 
// будет менят глобальный объект статистики голосов и добавлять
// туда ключ (имя избирателя) и значение (имя президента).

// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

const statistic = {};
const Voter = function (name) {
  this.name = name;
  this.vote = function (presidentName) {
    // statistic[this.name] = presidentName;
    if (this.name in statistic) {
      return;
    }
    statistic[this.name] = presidentName;
  };
};
const result = function (stats) {
  const total = {};
  for (const vote in stats) {
    const pres = stats[vote];
    if (pres in total) {
      total[pres] += 1;
    } else {
      total[pres] = 1;
    }
  }
  return total;
};
const voter1 = new Voter("voter1");
const voter2 = new Voter("voter2");
const voter3 = new Voter("voter3");
const voter4 = new Voter("voter4");
const voter5 = new Voter("voter5");
const voter6 = new Voter("voter6");
console.log(voter1);
voter1.vote("Prezident1");
voter2.vote("Prezident2");
voter3.vote("Prezident3");
voter4.vote("Prezident2");
voter5.vote("Prezident3");
voter6.vote("Prezident3");
console.log(statistic);
console.log(result(statistic));