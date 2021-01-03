// "Увольте" сотрудника если он неактивен И(!) его зп больше 100
const workers = [
    {name:'Alex', salary: 100, isActive: true },
    {name:'Rita', salary: 80, isActive: false },
    {name:'John', salary: 100, isActive: true },
    {name:'Derek', salary: 200, isActive: false }
]
const removeWorker = function(arr) {
  for (const worker of arr) {
    console.log(worker);
    
    if (worker.salary > 100 && worker.isActive === false) {
      const index = arr.indexOf(worker);
      console.log(index);
      const removedPerson = arr.splice(index, 1);
      return removedPerson[0];
    }

    
  }
}

// removeWorker(workers);
console.log(removedPerson(workers));