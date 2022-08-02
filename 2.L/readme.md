# Liskov substitution principle
"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also [design by contract](https://en.wikipedia.org/wiki/Design_by_contract).

### Polymorphism
You might already be aware of Polymorphism, but just to remind you, here is the short summary:
If 2 different classes use **the same interface**, so they have the same function names: the code that uses this class does not care about which one class it receives.
In short: When two objects have the same interface, they are functionally interchangeable = polymorphism.

## Your mission
Look at the old.ts file and open the index.html file, refactor the Discount class in 3 different classes with the same interface "VariableDiscount" & "FixedDiscount" & "NoDiscount"

### Discuss
Do you understand what the use is of having the class NoDiscount? This prevents us from having to write extra if-statements inside product to check if we actually have a Discount dependency. It might look strange but these null or void classes are very common in a lot of popular libraries!

# The COOL part of the README :sunglasses:

## Starting Out
As always, the very first thing I do when refactoring code to the SOLID principles, is splitting everything up in separate files.
Then I added an interface for the discounts, it looked like this:
````
export interface InterfaceDiscount {
    apply(price : number) : number
    showCalculation(price : number) : string
}
````
Then I created a Discount parent class.
I only gave it the properties that the future child classes would need.
In this case, only the _value property, which is a number.
Lastly, I also added the methods of the Interface I mentioned earlier.

## Think of the children!!
I created child classes that are the different types of discounts.
In there, I added the methods of the interface, but I adjusted what the method does according to the type of discount it is.

## Final Finale
Finally, I added the new.ts file and added all the necessary code.
There was one small change I made, and that was creating a new object from the different Discount type classes instead of the Discount class.
I checked if everything worked, and it did!
Then I changed all the new Discounts back to see if the code still works if the child classes get replaced by the parent class, and it did!
