# Useful Stuff

## VSCode Shortcuts

**crtl + F2** - Replace all variables of the same name name with a new name.

**crtl + Shift** - Show aviavle variables.

## VSCode Settings

Auto Format on Save

Auto Format on Paste

## TypeScript Syntax

(In German so I do know exactly what it means)

**=** - Zuweisung

**==** - Vergleich (loose, hier 0 = "0" = false )

**===** - Exakter Vergleich (strict, hier 0 nicht = "0" )

# Object Oriented Programming

Object-oriented programming allows intuitive modeling of complex software by organizing it in a way that mirrors real-world entities. 

The key principles of OOP are **Abstraction**, **Encapsulation**, and **Instantiation**.

- **Abstraction** involves identifying and defining essential properties and methods of real-world objects, which allows simplifying and generalizing complex systems. 

A "Dog" class might have properties like size and fur color, along with behaviors like barking and biting.

- **Encapsulation** hides the internal workings of an object, allowing users to interact with the object without needing to know how its functions are implemented. 

For example, a "Vector" class can have methods like `scale` and `add`, which modify the vector directly without exposing the underlying logic.

- **Instantiation** is the process of creating specific instances (objects) of a defined class. This is achieved using the `new` keyword, making it possible to have multiple unique instances with their own properties.

## Implementing OOP in Code

**Class vs. Object**

A class defines a template for objects. Objects are instances of a class that contain individual property values and can execute methods defined in the class.

**Constructor**
 A special method that initializes an object's properties when it's instantiated. It allows setting up initial values and conducting essential setup tasks.

**Methods and `this` Keyword**
   - Methods in a class define the actions an object can perform. For instance, methods like `scale` and `add` in a `Vector` class provide functionality to adjust and manipulate vectors.
   - Methods within a class should describe actions without repeating the class name.
   - The keyword `this` within a method refers to the current instance of the class, allowing access to its properties and other methods. This makes it possible to work with an object's internal state without needing to pass it explicitly.

**Conventions in Class Naming and Structure**
   - **Naming**: Classes should be named singularly (e.g., `Vector` instead of `Vectors`) to represent a single instance.
   - **File Structure**: Each class is typically implemented in its own file, named after the class itself (e.g., `Vector.ts`). This promotes modularity and readability.
   - **Method Naming**: Methods should describe actions directly and concisely (e.g., `scale` instead of `scaleVector`) to avoid redundancy.






