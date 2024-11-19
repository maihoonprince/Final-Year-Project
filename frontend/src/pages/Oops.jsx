import React from "react";
import "./../styles/Pages.css";

const Oops = () => {
  return (
    <div className="page">
      <h1>Object-Oriented Programming (OOPs) Concepts</h1>
      <p>
        Learn the fundamental principles of Object-Oriented Programming (OOP) and explore commonly asked OOP interview questions with answers.
      </p>

      {/* OOP Topics */}
      <section className="topics">
        <h2>OOP Topics</h2>

        <div className="topic">
          <h3>1. What is OOP?</h3>
          <p>
            Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data and code to manipulate that data.
          </p>
          <pre>
{`Example:
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display(self):
        print(f"Car: {self.brand} {self.model}")

car = Car("Toyota", "Corolla")
car.display()
`}
          </pre>
        </div>

        <div className="topic">
          <h3>2. Encapsulation</h3>
          <p>
            Encapsulation is the process of bundling data (variables) and methods (functions) that operate on the data into a single unit, typically a class.
          </p>
          <pre>
{`Example:
class Employee:
    def __init__(self, name, salary):
        self.__name = name
        self.__salary = salary  # Private variable

    def get_salary(self):
        return self.__salary

emp = Employee("John", 50000)
print(emp.get_salary())
`}
          </pre>
        </div>

        <div className="topic">
          <h3>3. Inheritance</h3>
          <p>
            Inheritance allows a class to inherit properties and behaviors (methods) from another class, promoting code reusability.
          </p>
          <pre>
{`Example:
class Animal:
    def sound(self):
        print("This is a generic animal sound.")

class Dog(Animal):
    def sound(self):
        print("Bark!")

dog = Dog()
dog.sound()
`}
          </pre>
        </div>

        <div className="topic">
          <h3>4. Polymorphism</h3>
          <p>
            Polymorphism allows the same function or method to behave differently based on the object it is acting upon.
          </p>
          <pre>
{`Example:
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def area(self):
        return "Rectangle Area"

class Circle(Shape):
    def area(self):
        return "Circle Area"

shapes = [Rectangle(), Circle()]
for shape in shapes:
    print(shape.area())
`}
          </pre>
        </div>

        <div className="topic">
          <h3>5. Abstraction</h3>
          <p>
            Abstraction involves hiding the implementation details and exposing only the functionality to the user.
          </p>
          <pre>
{`Example:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def area(self):
        return "Calculating area of rectangle"

rect = Rectangle()
print(rect.area())
`}
          </pre>
        </div>

        <div className="topic">
          <h3>6. Classes and Objects</h3>
          <p>
            A class is a blueprint for objects, and objects are instances of classes.
          </p>
          <pre>
{`Example:
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 25)
print(person.name, person.age)
`}
          </pre>
        </div>

        <div className="topic">
          <h3>7. Method Overloading and Overriding</h3>
          <p>
            <strong>Overloading:</strong> Same method name with different parameters.  
            <strong>Overriding:</strong> Subclass method overrides superclass method.
          </p>
          <pre>
{`Example:
class Calculator:
    def add(self, a, b, c=0):
        return a + b + c

calc = Calculator()
print(calc.add(2, 3))
print(calc.add(2, 3, 4))

class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        print("Hello from Child")

child = Child()
child.greet()
`}
          </pre>
        </div>
      </section>

      {/* OOP Interview Questions */}
      <section className="interview-questions">
        <h2>Top 30 OOP Interview Questions</h2>

        <div className="question">
          <h3>Q1. What are the main principles of OOP?</h3>
          <p>
            The four main principles of OOP are:
          </p>
          <ul>
            <li><strong>Encapsulation:</strong> Binding data and methods together.</li>
            <li><strong>Inheritance:</strong> Acquiring properties of another class.</li>
            <li><strong>Polymorphism:</strong> One function, multiple behaviors.</li>
            <li><strong>Abstraction:</strong> Hiding implementation details.</li>
          </ul>
        </div>

        <div className="question">
          <h3>Q2. What is the difference between a class and an object?</h3>
          <p>
            A class is a blueprint for creating objects. An object is an instance of a class.
          </p>
        </div>

        <div className="question">
          <h3>Q3. What is the purpose of constructors in OOP?</h3>
          <p>
            A constructor initializes an object when it is created. It is called automatically and often used to set initial values for the object's properties.
          </p>
        </div>

        <div className="question">
          <h3>Q4. Explain the difference between method overloading and method overriding.</h3>
          <p>
            <ul>
              <li><strong>Overloading:</strong> Same method name with different parameters in the same class.</li>
              <li><strong>Overriding:</strong> Subclass redefines a method from the parent class.</li>
            </ul>
          </p>
        </div>

        <div className="question">
          <h3>Q5. What is polymorphism in OOP?</h3>
          <p>
            Polymorphism allows methods to have different behaviors depending on the object calling them, e.g., method overriding and method overloading.
          </p>
        </div>

        {/* Add remaining questions and answers similarly */}
      </section>
    </div>
  );
};

export default Oops;
