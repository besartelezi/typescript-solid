# SOLID Typescript: The Reckoning
This is assignment is all about learning.
Which means, I will not care in the **slightest** about the speed of my progress or the result of my project.
My sole focus will be understanding what I'm doing, aspiring to understand the SOLID principles as good as possible, and to soak my brain in the knowledge-juices of articles explaining SOLID.

## Installing Typescript and Parcel
For the first time ever, I can give a shout-out to Past-Besart!
Past-Besart has used both Parcel and Typescript on a previous personal project.
So installing these two will be a lot easier this time!
Once I'm done with installing, I can finally focus on staring at my screen, soaking in SOLID information until the information starts burning through my eyes and goes straight into my brain.

## Learning Experience - How to Experience Learning
As much as I love writing and reading, I just can't learn new stuff purely by reading.
My creative and rebellious brain just doesn't work like that.
But I can trick my brain into learning by writing down everything I've read.
Writing it down as simple as possible really forces me to fully comprehend everything going on.

Not only do I learn that way, other people might also find the way I wrote everything about SOLID principles more understandable than articles.
And if my silly little words can help others, then that's something I can most definitely be proud of.

---

## TO-(delie)-DO LIST
- [x] Install Typescript
- [x] Install Parcel
- [ ] Learn more about the four pillars of OOP
  - I have been using the OOP principles for a while now, but ask me what the four pillars of OOP are and I'll start naming the names of the Elite Four in every Pokémon game.
  That's why I wanted to use this exercise as an opportunity to learn more about the four pillars of OOP.
  - [x] Ask Big Papa Google what the Four Pillars of OOP are
  - [ ] Learn more about every pillar in depth
    - [x] Abstraction
    - [ ] Encapsulation
    - [ ] Inheritance
    - [ ] Polymorphism
    - If you can add an example, do it!
- [ ] SOLID - S(nake) 
  - [ ] Read all information given to us by the coaches regarding the S of SOLID.
  - [ ] Add S of SOLID part in README
    - [ ] Write everything I've learned from the sources given to us by BeCode about the S
    - Try to use my own words, describe it as simple as possible, and don't be afraid to make mistakes in my own explanation.
  - [ ] Do some investigating of my own
    - [ ] Add those resources to README
    - [ ] Write out new insights I've gained from other resources
- [ ] Add funny title for when I'm at the L in SOLID
  - [ ] The L in Solid: The first L I've taken in my entire life

---

## Four Pillars of OOP
The Four Pillars are some design rules that you need to follow in order to write clean code.
Being able to write clean code is sometimes not even a 'nice-to-have', but a bare minimum requirement.
Clean code => Easy to understand => Easy to implement/Easy to change => Happy employers => Winner winner caviar for dinner.

The four pillars are: **abstraction, encapsulation, inheritance, and polymorphism.**
I will now explain these four pillars as best as I can!

### Abstraction
Coding is complicated, no matter how many years of experience you have.
So if you'd tell me to memorize and understand all the code of a project, including the parts I didn't write myself, I'd get a nervous breakdown.

That's where abstraction comes in.
This principle is all about hiding away the ugly parts of your code in a neat function that's named after what the code does.
Not exactly and as detailed as possible, but in just one broad term.
If you ever *want* to understand how the code works, you can just check it out yourself.

The source I used to understand abstraction better gave me an example of how code would work with and without abstraction.
I will cite it below, since I absolutely love this example:

````
How to Create it With Abstraction

    Have a button with the title "Make coffee"

How to Create it Without Abstraction

    Have a button with the title "Boil the water"
    Have a button with the title "Add the cold water to the kettle"
    Have a button with the title "Add 1 spoon of ground coffee to a clean cup"
    Have a button with the title "Clean any dirty cups"
    And all the other buttons
````

So in short, abstraction is to use functions with one clear goal/purpose so you can hide away all the technical mumbo jumbo.
The IT-world is filled with lazy people and big scary code, no need to make it any scarier!

### Encapsulation
Figuratively, encapsulating is putting your code in a capsule so that no one can access it.
Literally, it means that you set everything to private so that it limits what can be accessed.
This is necessary in order to protect private data/information.

Say for example, you're back in elementary school.
And you want to tell your friend who your lil' crush is.
If you tell them the name of your crush through a megaphone at the schoolyard, you're not using encapsulation.
If you whisper them the name of your crush in the school bathroom after checking every stall to be sure nobody's there, you're using encapsulation.

So in the simplest way possible, this means ya gotta slap a 'private' to all your properties and call it a day!

### Inheritance
Through inheritance, one object acquires the methods and properties of another object.

So if I create a class called 'Animal', I can create a child class from that called 'Dog'.
The dog class shares some properties of the animal class, while also adding some properties that only the dog has.

Why do we do this?
Well for reusability's sake!
Why write code you have already written somewhere else.
But you need to make sure that the inheritance makes sense.
So for example, say I create a class called 'Bird' with a property called 'wings'.
I want to create a class called 'Dragon'.
Dragons also have wings, but they don't have a lot of properties that the bird does have, like 'feathers', 'beak', etc.
So when adhering to the Inheritance rule, 'Dragon' won't be a child class of the parent class 'Bird'.

If you can find a way to do write less code and be lazy, go for it!
Not only do you save a lot of time, your code will also be more clear and readable.
So why work hard, create sloppy code, and anger everyone who's working together with you on the project, when you can be lazy!

![jojo-lazy](images/jojo-hard-work.png)

### Polymorphism
Polymorphism builds upon inheritance.
Apparently, I already gave an explanation of polymorphism in the Inheritance text I wrote.
With polymorphism, you can access the properties you inherited, and add some new properties.

I'd like to give an example from the source I used to learn more about the Four Principles of OOP:
````
Dog extends from Animal and can make use of the default legs property. 
But it's also able to do its own implementation of making its own noise.
````

So in short, polymorphism is having the same properties that you inherited from the parent, **AND** adding ones of your own.

## Do me a SOLID, and move on from OOP
I chose to learn more about OOP, so that I can understand SOLID a bit better.
I'm not much of a theory kinda guy, so when I learn something, I better learn it as thorough as possible.

With the Four Pillars of OOP out of the way and inserted into my brain, I will now move on to learning the SOLID principles.

## S - Single Responsibility Principle

---

## Sources
* Regarding OOP:
  * [This freecodecamp link](https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/)