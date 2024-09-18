
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  
  greet() {  // Greet method for Person class
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}


class Employee extends Person { // Employee class extending Person
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor with name and age
    this.jobTitle = jobTitle; // Additional property specific to Employee
  }

  
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);// jobGreet method for Employee class
  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
