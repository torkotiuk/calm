// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//    
//   },
//   down() {
//     this.step--;
//    
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log( this.step );
// 
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().showStep();
// ================================
let ladder = {
  step: 0,
    up() {
      this.step++;
     //  console.log(this === ladder);
      return this;
   },
   down() {
     this.step--;
     return this;
   },
   showStep: function() { // показывает текущую ступеньку
     console.log( this.step );
     return this;
   }
 };
 // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
 ladder.up()
   .up()
   .up()
   .down()
   .showStep()
   .up()
   .showStep();