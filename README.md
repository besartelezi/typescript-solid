# SOLID Typescript: The Reckoning
This assignment is all about learning.
Which means, I will not care in the **slightest** about the speed of my progress or the result of my project.
My sole focus will be understanding what I'm doing, aspiring to understand the SOLID principles as good as possible, and to soak my brain in the knowledge-juices of articles explaining SOLID.

This README will be the main README.
I will write down my learning experience down here.
Every folder you can see in the repository, is for a separate principle of SOLID.
So in every folder you can find their own README, where I explain what I changed about the code, and why I made those changes.
But all the information about SOLID, the theory, and the explanations, are all written down in this README.

Without noticing it myself, I added a lot more memes to this README than I normally do.
So I hope you like memes, because you'll get plenty of 'em!

![read-meme](images/read-meme.png)

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
- [x] Learn more about the four pillars of OOP
  - I have been using the OOP principles for a while now, but ask me what the four pillars of OOP are and I'll start naming the names of the Elite Four in every Pok??mon game.
  That's why I wanted to use this exercise as an opportunity to learn more about the four pillars of OOP.
  - [x] Ask Big Papa Google what the Four Pillars of OOP are
  - [x] Learn more about every pillar in depth
    - [x] Abstraction
    - [x] Encapsulation
    - [x] Inheritance
    - [x] Polymorphism
    - If you can add an example, do it!
- [x] SOLID S(nake) 
  - [x] Read all information given to us by the coaches regarding the S of SOLID.
  - [x] Add S of SOLID part in README
    - [x] Write everything I've learned from the sources given to us by BeCode about the S
    - Try to use my own words, describe it as simple as possible, and don't be afraid to make mistakes in my own explanation.
  - [x] Do some investigating of my own
    - [x] Add those resources to README
    - [x] Write out new insights I've gained from other resources
  - [x] Finish the S assignment
    - [x] Write in that README about how I tackled that assignment
    - [x] Comment code / explain what I did
- [x] 'O' here comes trouble
  - [x] Read all information given to us by the coaches regarding the O of SOLID.
  - [x] Add O of SOLID part in README
    - [x] Write everything I've learned from the sources given to us by BeCode about the O
    - Try to use my own words, describe it as simple as possible, and don't be afraid to make mistakes in my own explanation.
  - [x] Do some investigating of my own
    - [x] Add those resources to README
    - [x] Write out new insights I've gained from other resources
  - [x] Finish the O assignment
    - [x] Write in that README about how I tackled that assignment
    - [x] Comment code / explain what I did
- [ ] First 'L' I've ever taken
  - [X] Read all information given to us by the coaches regarding the L of SOLID.
  - [X] Add L of SOLID part in README
    - [X] Write everything I've learned from the sources given to us by BeCode about the L
    - Try to use my own words, describe it as simple as possible, and don't be afraid to make mistakes in my own explanation.
  - [X] Do some investigating of my own
    - [X] Add those resources to README
    - [X] Write out new insights I've gained from other resources
  - [x] Finish the L assignment
    - [x] Write in that README about how I tackled that assignment
    - [x] Comment code / explain what I did
- [ ] 'I' can't believe you've done this
  - [x] Read all information given to us by the coaches regarding the S of SOLID.
  - [x] Add S of SOLID part in README
    - [x] Write everything I've learned from the sources given to us by BeCode about the S
    - Try to use my own words, describe it as simple as possible, and don't be afraid to make mistakes in my own explanation.
  - [x] Do some investigating of my own
    - [x] Add those resources to README
    - [x] Write out new insights I've gained from other resources
  - [ ] Finish the I assignment
    - [ ] Write in that README about how I tackled that assignment
    - [ ] Comment code / explain what I did
- [ ] 'D'amn that boy can code!
  - [x] Read all information given to us by the coaches regarding the D of SOLID.
  - [x] Add D of SOLID part in README
    - [x] Write everything I've learned from the sources given to us by BeCode about the D
    - Try to use my own words, describe it as simple as possible, and don't be afraid to make mistakes in my own explanation.
  - [x] Do some investigating of my own
    - [x] Add those resources to README
    - [x] Write out new insights I've gained from other resources
  - [ ] Finish the D assignment
    - [ ] Write in that README about how I tackled that assignment
    - [ ] Comment code / explain what I did
-[x] Add an ending
---

## Four Pillars of OOP
The Four Pillars are some design rules that you need to follow in order to write clean code.
Being able to write clean code is sometimes not even a 'nice-to-have', but a bare minimum requirement.
Clean code => Easy to understand => Easy to implement/Easy to change => Happy employers => Winner winner caviar for dinner.
I wanted to learn more about the Four Pillars of OOP for multiple reasons, but the most important reason is that I think it will help me understand the SOLID principles better.

The four pillars are: **abstraction, encapsulation, inheritance, and polymorphism.**
I will now explain these four pillars as best as I can!

### Abstraction
Coding is complicated, no matter how many years of experience you have.
So if you'd tell me to memorize and understand all the code of a project, including the parts I didn't write myself, I'd get a nervous breakdown.

That's where abstraction comes in.
This principle is all about hiding away the ugly parts of your code in a neat function that's named after what the code does.
You don't name it as detailed as possible, but in just one broad term, so everyone knows what the function roughly does.
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

## Change of plans
After staring at my screen for way too long, not being able to actually put the theory of the Single Responsibility Principle into practice, I decided to switch things up a bit.
Now I will learn all the principles, try to understand them, research them, write them down, whatever it takes for them to not escape the inner workings of my mind.

I think switching things up is the right thing to do.
No matter how hard I break my head around it, I just can't comprehend (for now) how the classes and their functions work together with other classes and functions.
Refactoring code is also something that's not going too smoothly right now.
My brain just needs to freshen itself up a bit, and focus on something that's a bit more do-able.
And who knows, maybe I can figure out the solution to my problem through the other steps of the SOLID principles.

## Plans have changed once again
I think I was too much in my own head, second-guessing everything and doing nothing won't help me.
So I'll abandon reading and just turn off my brain and learn from the mistakes.

**TL;DR: Reading is for nerds, turning your brain off and making mistakes is the way to go (smashing your head against a wall until the wall breaks)**

## SRP - Single Responsibility Principle
SRP, or the Single Responsibility Principle (or the Spicy Rule is Present as one might say) has one single rule you must absolutely abide by.
**"Classes should have a single responsibility and thus only a single reason to change."**

So in other words, everything needs a single reason to exist.
Everything has a "Single Responsibility".
You can't have a 'CorporateBusiness' class that can 'doMarketing', 'doHR', and 'whipDevelopersInWorkingShape'.
Because if you do, then the 'CorporateBusiness' becomes a God Object, and that's a big no-no.

### Example Time
If your class can do literally everything, that means everything is connected to each other.
If you change something in the 'doHR', then the 'doMarketing' might stop working properly.
So, these functions need to be a part of separate classes.
The 'doMarketing' function becomes a function in the 'MarketingDepartment' class.

If the words and the example don't make you understand it properly, I will add an example below.
Personally, examples make me understand stuff 100000000000% faster.

The following example is made ignoring the Single Responsibility Principle.
````
class CorporateBusiness {

    public doMarketing () {
        //code that does marketing
    }

    public doHR () {
        //code that does HR
    }

    public whipDevelopersInWorkingShape () {
        //code that does development
    }
}
````

And the following example is made by adhering to the Single Responsibility Principle.
````
class MarketingDepartment {
    private doMarketing () {
        //code that does marketing
    }
}
class HRDepartment {
    private doHR () {
        //code that does HR
    }
}
class WebDevDepartment {
    private whipDevelopersInWorkingShape () {
        //code that does development
    }
}

class CorporateBusiness {

    //adding other classes as properties of this class
    private _marektingDepartment : MarketingDepartment;
    private _hrDepartment : HRDepartment;
    private _webDevDepartment : WebDevDepartment;

    constructor(_marektingDepartment : MarketingDepartment, _hrDepartment : HRDepartment,_webDevDepartment : WebDevDepartment) {
        this._marektingDepartment = _marektingDepartment;
        this._hrDepartment = _hrDepartment;
        this._webDevDepartment = _webDevDepartment;
    }
}


````

Everything is kept separate, it won't affect the other classes, and they can be called anywhere you need.
Adding the newly added classes as properties to the CorporateBusiness class, makes it so that when you create a new CorporateBusiness object, you also create new objects of the newly added properties!

## OCP - Open Closed Principle
The Open Closed Principle described in one sentence is "Open for extension, but closed for modification".
This means that once you've written your code, you shouldn't modify it anymore.
And if you want to implement new features or code, you can just add onto it, without modifying the old code.

### How to OCP
To write code that implements this principle, you need to split up the code in two parts.
The first part is the "open for extension" part of the code.
You can add new behaviour and new code, without breaking the entire darn thing.
The second part is the "closed for modification" part of the code.
This code's design should **never** change once written.

This basically means that you can always add new code, but never change the design of old code.
Code becomes more clear this way, costs of modifying the code get decreased, and changing one part of the code won't result in changing code throughout the entire project.
Time is of essence, so this principle will save developers a lot of time.

### Black Box
It was also mentioned that ideal code should be written using the black box principle.
Which according to me, is somehow similar to the Abstraction principle of OOP.
The difficult code should be hidden behind a method or function, with a name simple name so the user knows roughly what the output of the code will be.

![alt-text](images/patrick-spongebob.gif)

## LSP - Liskov Substitution Principle
This principle can once again be summarized in one sentence: "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."
Now to explain this with an example.

### Example Time
Say we have a parent class called 'HomerSimpson' and it has a child class called 'BartSimpson'.
Then we have a method that expects a HomerSimpson object as it's input.
According to the LSP, we should be able to swap that HomerSimpson object for a BartSimpson object, without the code breaking or doing something weird.

And in order to adhere to the LSP, the parent class needs to have properties that are relevant to the child class.
If the parent has a property the child won't use, well, then you done messed up A-ARON!!

### Memexplanation
I've also made a meme that might explain the LSP to people who can only soak up knowledge through memes (people like myself).

![liskov-meme](images/liskov.png)

### Interface
Multiple different classes can use the same interface, this is a form of polymorphism.
Interfaces are public, don't have properties and are made out of methods.
The methods in the interface itself are what's going to be used by the different classes.

## ISP - Interface Segregation Principle
The ISP is kind of the same as the LSP, but not quite...

![same-same-but-different](images/same-same.gif)

What's similar is that one interface shouldn't have methods that all classes can use, because this will result in some classes having unnecessary code.
To fix this is where the ISP comes in!
Interfaces need to only have the relevant methods.

###  Giving an Ample Example
I'll start out by writing some code and afterwards explaining it.
````
interface Bird {
    hasBeak ();
    hasFeathers();
    canFly ();
    flyingSpeed();
}

class Mockingbird implements Bird {
    hasBeak() {
    }
    hasFeathers() {
    }
    canFly() {
    }
    flyingSpeed() {
    }
}

class Penguin implements Bird {
    hasBeak() {
    }
    hasFeathers() {
    }
}
````
This is an example of code that's not following the ISP.
The interface 'Bird' has methods that shouldn't apply to the Penguin class.
So, we separate the Bird interface into two, more specific interfaces.
````
interface Bird {
    hasBeak ();
    hasFeathers();
}
interface Fly {
    canFly ();
    flyingSpeed();
}

class Mockingbird implements Bird, Fly {
    hasBeak() {
    }
    hasFeathers() {
    }
    canFly() {
    }
    flyingSpeed() {
    }
}

class Penguin implements Bird {
    hasBeak() {
    }
    hasFeathers() {
    }
}
````
Now that's more like it!
The LSP taught me that a parent class only needs the properties that all of it's children classes will need to inherit.
This logic also applies to the interface.
Only in this case, an interface needs to have methods that only apply to the class it will be implemented by.

## DIP - Dependency Invasion Principle
If there's one thing that's important for the SOLID principles, it's interfaces.
Interfaces are to the SOLID principles what memes are to my READMES.

The Dependency Invasion Principle is about structure.
Creating a structure that's not rigid, fragile or immobile.

* Rigid : Hard to change due to the effects that change might bring to the code.
* Fragile: Changes = code goes broke-y.
* Immobile: You cannot re-use entities because they're too entangled with one another.

DIP is all about writing code that you can re-use wherever, is easy to maintain and is *flexible*.
That's all good and well, but how the heck do I get started on that?!

### Traditional Dependency Structure V.S Inverted Dependency Structure
Before we start thinking on how to write code that's DIP-approved, I'll have to explain Dependency Structures.
It basically means the structure, the layout, that rules that code follows in the way it depends on one another.
I think giving an example might be the best way to explain it.

The traditional model is a top-down model.
High-level entities depend on low-level entities, and they depend on even lower level entities.
And this keeps on keeping on.
The problem here is that, changes made at the bottom of the code-food-chain, forces changes to higher-level entities.
This can mess up the code quite a lot.

That's where the Inverted Dependency Structure comes in.
Both high-level and low-level abstractions depend on shared abstractions, or in this case, interfaces!
This way modules can be re-used, changes won't destroy the entire darn project, and it's easier to maintain!

![structure-meme](images/dependency-structure.png)

### Interfacing the code head-on
The shared abstractions that were mentioned are **interfaces**.
The most important part of the DIP is to remember: **Do not use a top-down dependency model, use interfaces (abstractions) to create connections between the classes.**

## A rock-SOLID ending
If I were to describe this assignment in one word, then I wouldn't pick a word, but I'd pick a meme.

![advanced-meme](images/advanced-becode.png)

I'll be completely honest and admit that I struggled quite a bit with this assignment.
It was quite different from the other assignments we've been doing until now.
This one focused heavily on theory, I really had to read through some articles and fundamentally understand the SOLID principles.

As much as I struggled with this assignment, I have to admit this was both necessary and made me a better developer.
SOLID and OOP are such important theories to know and to apply to your code.
I myself love some good ol' structure, that's why I add TO-DO lists atop of TO-DO lists.
So implementing that theory will be something I'll definitely pay a lot of attention to.

All in all, great assignment that will be a huge advantage to me when I'm on the jobhunt.
It's not often we see some heavy theory like this, but when we do, we do it thoroughly!

---

## Sources
* Regarding OOP:
  * [This freecodecamp link](https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/)
* Regarding SOLID:
  * [Entirety of SOLID, with a focus on SRP](https://www.freecodecamp.org/news/solid-principles-single-responsibility-principle-explained/)
  * [Entirety of SOLID](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)
  * [Interfaces](https://www.w3schools.com/php/php_oop_interfaces.asp)

![freecodecamp](images/freecodecamp-meme.png)