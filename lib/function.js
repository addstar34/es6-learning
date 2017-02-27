// use of arrow function example shows what happens without using the arrow function

"use strict";

// arrow function locks the value of this to the value it is outside the statement
// class Hello {
//   constructor() {
//     this.num = 2;
//   }
//
//   addTwo() {
//     const addIt = () => {
//       this.num = this.num + 2;
//     }
//     addIt();
//   }
// }
//
// const h = new Hello();
// h.addTwo();
// console.log(h.num);


// same as above without using arrow function will return an error

class Goodbye {
  constructor() {
    this.num = 2;
  }

  addTwo() {
    const addIt = function () {
      this.num = this.num + 2;
    };
    addIt();
  }
}

const g = new Goodbye();
g.addTwo();
console.log(g.num);