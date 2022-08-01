"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//seperated all classes into separate files for more structure, here I'm importing them
var Zoo_1 = require("./Models/Zoo");
var Cat_1 = require("./Models/Cat");
var Dog_1 = require("./Models/Dog");
var Parrot_1 = require("./Models/Parrot");
var Gorilla_1 = require("./Models/Gorilla");
var zoo = new Zoo_1.Zoo;
zoo.addAnimal(new Cat_1.Cat);
zoo.addAnimal(new Dog_1.Dog);
zoo.addAnimal(new Parrot_1.Parrot);
//added gorilla because gorillas are pretty cool
zoo.addAnimal(new Gorilla_1.Gorilla);
zoo.animals.forEach(function (animal) {
    //changed zoo.makeSound to animal.makeSound
    //becuase of the forEach loop, every object in the let Zoo array becomes an object called animal
    //all animals have a method called makeSound, so this loop selects that method for all animals
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound(animal) + "<br>");
});
