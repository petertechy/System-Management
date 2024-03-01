let olanrewaju = {
  name: "Olanrewaju Ikolaba",
  designation: "Full Stack Developer",
  salary: 200000,
  currency: "USD",
  gender: "Female",
  increaseSalary: () => {
    // console.log("Increase salary by 10%");
  },
};
let lekan = {
  name: "Harlabest Olamilekan",
  designation: "Backend Developer",
  salary: 200000,
  currency: "USD",
  gender: "Male",
  increaseSalary: () => {
    // console.log("Increase salary by 10%");
  },
};
let idris = {
  name: "Idris Sqi",
  designation: "Database Engineer",
  salary: 200000,
  currency: "USD",
  gender: "Male",
  increaseSalary: () => {
    // console.log("Increase salary by 10%");
  },
};

let employee = function (name, designation, salary, currency, gender) {
  (this.name = name),
    (this.designation = designation),
    (this.salary = salary),
    (this.curency = currency),
    (this.gender = gender);
  //   (this.increaseSalary = () => {
  //     console.log("Increase salary by 10%");
  //   });
};

employee.prototype.increaseSalary = function () {
  console.log("Increase salary by 10%");
};

class employees {
  constructor(name, designation, salary, currency, gender) {
    (this.name = name),
      (this.designation = designation),
      (this.salary = salary),
      (this.curency = currency),
      (this.gender = gender);
  }
  updateDesignation(designation) {
    this.designation = designation;
  }

  retire() {
    // console.log("we hereby want to retire you cos...");
  }
}

let lilian = new employee("Lilian", "Full Stack", 20000, "USD", "Female");
let ola = new employees("Ola", "Backend Developer", 20000, "USD", "Male");

console.log(lilian, idris, ola);

let x = {};
x.name = "Name";
x.class = "pry 4";
x.age = 10;

console.log(x);

/**
 * Create an empty object
 */

class Human {
  constructor(name, color, height, speed, age) {
    (this.color = color), (this.height = height), (this.speed = speed);
    this.name = name;
    this.age = age;
  }
  run() {
    console.log(`this${this.name} is running at ${this.speed}km/h`);
  }
  position() {
    console.log(`Standing at the Prime Postion`);
  }
}

class Player extends Human {
  constructor(name, color, height, speed, age, skill) {
    super(name, color, height, speed, age);
    this.skill = skill;
  }

  dribble() {
    console.log(`${this.name} has ${this.skill}`);
  }
}

const kazuto = new Human("kazuto", "white", 1.2, 27, 40);
let messi = new Player("messi", "Dark", 1.78, 30, 49, "very high");
console.log({ messi, kazuto });
