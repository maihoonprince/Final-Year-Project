import React from "react";
import "./../styles/Pages.css";

const Cpp = () => {
  return (
    <div className="page">
      <h1>C++ Programming Language</h1>
      <p>
        Explore the core concepts of C++ programming, from beginner-level syntax to advanced features, followed by commonly asked C++ interview questions and answers.
      </p>

      {/* C++ Topics */}
      <section className="topics">
        <h2>C++ Topics</h2>

        <div className="topic">
          <h3>1. Introduction to C++</h3>
          <p>
            C++ is a general-purpose programming language developed by Bjarne Stroustrup. It is an extension of C with object-oriented features.
          </p>
          <pre>
{`Example:
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`}
          </pre>
        </div>

        <div className="topic">
          <h3>2. Variables and Data Types</h3>
          <p>
            C++ supports various data types such as <code>int</code>, <code>float</code>, <code>char</code>, and <code>double</code>. It also allows user-defined types like classes and enums.
          </p>
          <pre>
{`Example:
int age = 20;
float price = 99.99;
char grade = 'A';
`}
          </pre>
        </div>

        <div className="topic">
          <h3>3. OOPs Concepts in C++</h3>
          <p>
            C++ introduces object-oriented programming (OOP) concepts, including:
          </p>
          <ul>
            <li><strong>Encapsulation:</strong> Combining data and methods in a class.</li>
            <li><strong>Inheritance:</strong> Acquiring properties of another class.</li>
            <li><strong>Polymorphism:</strong> Functions behaving differently based on context.</li>
            <li><strong>Abstraction:</strong> Hiding implementation details.</li>
          </ul>
          <pre>
{`Example:
class Car {
public:
    string brand;
    void honk() {
        cout << "Beep! Beep!" << endl;
    }
};
`}
          </pre>
        </div>

        <div className="topic">
          <h3>4. Pointers in C++</h3>
          <p>
            Pointers are variables that store the memory address of another variable. They are a powerful feature in C++ for memory management.
          </p>
          <pre>
{`Example:
int a = 10;
int *p = &a;
cout << "Value: " << *p << endl;
`}
          </pre>
        </div>

        <div className="topic">
          <h3>5. C++ Standard Template Library (STL)</h3>
          <p>
            The STL provides a set of template classes and functions for common data structures like <code>vector</code>, <code>map</code>, and <code>set</code>.
          </p>
          <pre>
{`Example:
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3};
    for (int x : v) {
        cout << x << " ";
    }
    return 0;
}`}
          </pre>
        </div>

        <div className="topic">
          <h3>6. Exception Handling in C++</h3>
          <p>
            Exception handling allows you to handle runtime errors using <code>try</code>, <code>catch</code>, and <code>throw</code>.
          </p>
          <pre>
{`Example:
try {
    throw 20;
} catch (int e) {
    cout << "Exception: " << e << endl;
}`}
          </pre>
        </div>
      </section>

      {/* C++ Interview Questions */}
      <section className="interview-questions">
        <h2>Top 30 C++ Interview Questions</h2>

        <div className="question">
          <h3>Q1. What is C++?</h3>
          <p>
            C++ is a general-purpose programming language that supports both procedural and object-oriented paradigms.
          </p>
        </div>

        <div className="question">
          <h3>Q2. What are the key features of C++?</h3>
          <p>
            Key features include object-oriented programming, memory management with pointers, and support for templates through the STL.
          </p>
        </div>

        <div className="question">
          <h3>Q3. What is the difference between C and C++?</h3>
          <p>
            <ul>
              <li><strong>C:</strong> Procedural programming language.</li>
              <li><strong>C++:</strong> Supports both procedural and object-oriented paradigms.</li>
            </ul>
          </p>
        </div>

        <div className="question">
          <h3>Q4. What is a constructor in C++?</h3>
          <p>
            A constructor is a special method used to initialize objects. It is called automatically when an object is created.
          </p>
        </div>

        <div className="question">
          <h3>Q5. What are destructors in C++?</h3>
          <p>
            A destructor is a special method used to clean up resources allocated to an object. It is called automatically when an object is destroyed.
          </p>
        </div>

        {/* Add remaining questions and answers similarly */}
      </section>
    </div>
  );
};

export default Cpp;
