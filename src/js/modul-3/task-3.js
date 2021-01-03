const findBestEmployee = function(employees) {
  let bestEmployee = '';
  let maxTasks = 0;
  for (const key in employees) {
    if (employees[key] > maxTasks) {
      maxTasks = employees[key];
      bestEmployee = key;
      }
    }
  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence