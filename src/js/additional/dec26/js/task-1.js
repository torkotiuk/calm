// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt 
// и сохраняет их значение в свойствах объекта.

// sum() возвращает сумму введённых свойств.

// mult() возвращает произведение введённых свойств.
// Например:
const Calculator = function() {
  this.read = function() {
    this.a = +prompt('First number');
    this.b = +prompt('Second number');
  }

  this.sum = function () {
    return this.a + this.b;
  }
  this.mult = function () {
    return this.a * this.b;
  }  
}

Calculator.prototype.pow = function() {
  this.read(); //use read() from Calculator
  return this.a ** this.b;
};

// console.log(new Calculator);

// prompt('Enter number');

let calc = new Calculator();
let calc1 = new Calculator();
// console.log('Calc: ', calc1 === calc);

// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mult=" + calculator.mult() );
console.log(calc.pow());