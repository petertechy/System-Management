// Abstraction and Encapsulation: AnimalEnclosure class
  class AnimalEnclosure {
    constructor(species, age, healthStatus) {
      this.species = species;
      this.age = age;
      this.healthStatus = healthStatus;
    }

    feed() {
      console.log(`${this.species} is being fed.`);
    }

    rest() {
      console.log(`${this.species} is resting.`);
    }
  }

  // Inheritance: Animal class and derived classes (Lion and Elephant)
  class Animal {
    constructor(species, age) {
      this.species = species;
      this.age = age;
    }

    makeSound() {
      console.log("Generic animal sound.");
    }
  }

  class Lion extends Animal {
    makeSound() {
      console.log("Roar! 🦁");
    }
  }

  class Elephant extends Animal {
    makeSound() {
      console.log("Trumpet! 🐘");
    }

    useTrunk() {
      console.log("The elephant is using its trunk.");
    }
  }

  // Polymorphism: Function to perform sound based on the provided creature
  function performSound(creature) {
    creature.makeSound();
  }

  // Creating instances of AnimalEnclosure and Animal classes
  const lionEnclosure = new AnimalEnclosure("African Lion", 5, "Healthy");
  const elephantEnclosure = new AnimalEnclosure("African Elephant", 10, "Good");

  const lion = new Lion("African Lion", 5);
  const elephant = new Elephant("African Elephant", 10);

  // Interacting with the objects
  lionEnclosure.feed();
  lionEnclosure.rest();

  elephantEnclosure.feed();
  elephantEnclosure.rest();

  performSound(lion);
  performSound(elephant);

  // Additional interaction specific to Elephant
  elephant.useTrunk();
