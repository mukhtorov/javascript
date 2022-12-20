// let user = {
//   name: "webbrain",
//   title: "academy",
//   fullName() {
//     console.log(this.name, this.title);
//   },
// };

// // __proto__ -- variables
// // prototype -- Array, Object

// class Users {
//   ["web" + "brain"](title) {
//     console.log(title);
//   }
// constructor(title) {
//   this.title = title;
// }

// set welcomeMsg(value) {
//   console.log(value);
//   // console.log(`Hi ${this.title}, welcome to Webbrain`);
// }
// get welcomeMsg() {
//   console.log(this);
//   console.log(`Hi ${this.title}, welcome to Webbrain`);
// }
// }

// let usr1 = new Users("Eshmat");
// let usr2 = new Users("Toshmat");
// usr1.webbrain("webbrain");

// usr1.welcomeMsg = "webbrain";
// usr1.welcomeMsg;

// class Animals {
//   constructor(name) {
//     this.name = name;
//   }
//   speed(speed) {
//     console.log(`${this.name} runs ${speed}km per hour`);
//   }
// }

// class Rabbit extends Animals {
//   constructor(name, title) {
//     super(name);
//   }
//   info(name) {
//     console.log(`Quyonni 2ta qulogi bor`);
//   }
// }

// let rb = new Rabbit("Quyon");
// let tl = new Rabbit("Tulki");

// rb.speed(12);
// tl.speed(15);

// class Animals {
//   constructor(name) {
//     console.log(name);
//   }
// }

// class Rabbit extends Animals {
//   constructor(...args) {
//     super(...args);
//   }
// }

// let rb = new Animals("Quyon");
// let tl = new Rabbit("Tulki");

// class Webbrain {
//   static year = 0;

//   static getYear() {
//     console.log(++this.year);
//   }
//   age = 0;

//   getAge() {
//     console.log(++this.age);
//   }
// }

// // let st1 = new Webbrain();
// // let st2 = new Webbrain();

// Webbrain.getYear();
// Webbrain.getYear();
// Webbrain.getYear();
// Webbrain.getYear();
// Webbrain.getYear();

// Webbrain.getYear();
// Webbrain.getYear();
// Webbrain.getYear();
// Webbrain.getYear();
// st1.getYear;
// st1.getYear();
// st2.getYear();

// console.log("=====");

// class Protected {
//   _name = "webbrian";
//   #protected = "dont touch it";
//   get getName() {
//     console.log(this.#protected);
//   }
//   set getName(vl) {
//     this.#protected = vl;
//   }
// }

// let pr = new Protected();

// pr.getName;

// pr.getName = "I want to touch it";
// pr.getName;

// class Ar extends Array {}

// let ar = new Ar();
// let a = () => {};

// console.log(a instanceof Object);

class Users {
  getName() {
    console.log("no name");
  }
}

let obj = {
  info() {
    console.log("Mohichehra tushundingizmi???");
  },
};

Object.assign(Users.prototype, obj);

let ur = new Users();

ur.info();
