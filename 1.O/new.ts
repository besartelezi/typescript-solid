//seperated all classes into separate files for more structure, here I'm importing them
import {Zoo} from "./Models/Zoo";
import {Cat} from "./Models/Cat";
import {Dog} from "./Models/Dog";
import {Parrot} from "./Models/Parrot";
import {Gorilla} from "./Models/Gorilla";


let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
//added gorilla because gorillas are pretty cool
zoo.addAnimal(new Gorilla);

zoo.animals.forEach((animal) => {
    //changed zoo.makeSound to animal.makeSound
    //becuase of the forEach loop, every object in the let Zoo array becomes an object called animal
    //all animals have a method called makeSound, so this loop selects that method for all animals
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound(animal) + "<br>");
});