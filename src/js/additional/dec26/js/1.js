const countProps = function (obj) {
  // const x = obj.length;
  // console.log(keys);
  // return ;

  return Object.values(obj).length;
};

console.log(countProps({ name: 'Mango', age: 2 })); // 2
