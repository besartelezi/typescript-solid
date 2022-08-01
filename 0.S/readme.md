# The Assignment's Part of the README 

---

# Single responsibility principle

## Theory
A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
That might sound very theoretic so look at the old.ts file and open the index.html file, you can see the software has some options to handle fuel, music and the engine.
There are a couple of problems with this:

- The Car class is a classic example of a so-called “God object” — that is, an object that knows about and does everything. These types of objects are really hard to maintain, extend and test.
- We have to prefix every variable with the correct domain eg. "engineStatus". It would be nicer to just name it "Status" but we cannot do this in the car because you might confuse it with the status of the MusicPlayer.
- What if want different types of engines with different ways of consuming fuel? We would have to put a lot of extra if-statements in our car class.

## Your mission
Look at the old.ts file and open the index.html file, you can see the software has some options to handle fuel, music and the engine. However, these are really 3 separate domains making the current Car object really strange.
Refactor the code, so we have at least a separate class for Car, Engine and MusicPlayer. Where do you think we should place the fuel functionality?

### Extra challenge
Make a new type of Engine that also consumes Fuel

---

# The COOL part of the README :sunglasses:

## SRP - Opening The File
The moment I opened the file, I received the biggest headache known to mankind.
My very first thought was 'ah, now I get why the coaches at BeCode want us to learn this as good as possible'.
Understanding someone else's code is always a hassle, but when they're not adhering to the SOLID principles makes it even harder.

The very first problem I encountered was that, while I understood the theory, I had no idea how to apply it.
I also understand that everything needs to be in separate classes, have their own responsibility.
But how does that practically connect to main class, in this case, the 'Car' class.

## SRP - Some Real Problems
The hardest part of this assignment was just getting started.
The theory wasn't all that complicated, but it can get very deep.
I knew I had to create three different classes, a Car class, a MusicPlayer class and an Engine class.
Then, pick out everything that was in the Car class and put the code in either the MusicPlayer class or the Engine class, depending on what the code did.
Afterwards, I had to add the MusicPlayer and Engine class as a property to the Car class.

These steps all made sense to me, but I was lost as to how to go further with the assignment.
So I decided to read some more and hope I'll figure it out.
And honestly, that was a huge mistake.
I just lost a lot of time repeating the theory I already understood without putting it into practice.
When I decided to turn my brain off and just start coding, I finally understood the S of Solid a **lot** better.

When I added the classes as properties to the Car class, it was for the following purpose.
When creating a new Car object, you need to define the properties.
And these properties, that get passed through the constructor, were the newly constructed MusicPlayer and Engine objects.
Then when refactoring the code, I just had to add a 'musicplayer' or an 'engine' in between of the car object and the methods.
All in all, a job well done!
