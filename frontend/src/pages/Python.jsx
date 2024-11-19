import React from "react";
import "./../styles/Pages.css";

const Python = () => {
  return (
    <div className="page">
      <h1>Python Programming Language</h1>
      <p>
        Learn the fundamentals and advanced concepts of Python programming, followed by commonly asked Python interview questions with answers.
      </p>

      {/* Python Topics */}
      <section className="topics">
        <h2>Python Topics</h2>

        <div className="topic">
          <h3>1. Introduction to Python</h3>
          <p>
            Python is a high-level, interpreted programming language with dynamic semantics. It is widely used for web development, data analysis, artificial intelligence, and more.
          </p>
          <pre>
{`Example:
print("Hello, World!")`}
          </pre>
        </div>

        <div className="topic">
          <h3>2. Python Variables and Data Types</h3>
          <p>
            Python supports various data types, such as integers, floats, strings, lists, tuples, dictionaries, and sets. Variables in Python do not need explicit declaration.
          </p>
          <pre>
{`Example:
name = "Python"
age = 25
pi = 3.14`}
          </pre>
        </div>

        <div className="topic">
          <h3>3. Python Control Flow</h3>
          <p>
            Control flow includes conditional statements, loops, and control statements such as <code>if</code>, <code>for</code>, <code>while</code>, <code>break</code>, and <code>continue</code>.
          </p>
          <pre>
{`Example:
for i in range(5):
    print(i)
`}
          </pre>
        </div>

        <div className="topic">
          <h3>4. Functions in Python</h3>
          <p>
            Functions are reusable blocks of code that perform specific tasks. Python supports built-in functions as well as user-defined functions.
          </p>
          <pre>
{`Example:
def greet(name):
    return f"Hello, {name}"

print(greet("John"))
`}
          </pre>
        </div>

        <div className="topic">
          <h3>5. Python Classes and Objects</h3>
          <p>
            Python supports object-oriented programming. Classes are blueprints for creating objects, and objects are instances of classes.
          </p>
          <pre>
{`Example:
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 30)
print(person.name)
`}
          </pre>
        </div>

        <div className="topic">
          <h3>6. File Handling in Python</h3>
          <p>
            Python provides easy ways to read from and write to files using the <code>open</code> function.
          </p>
          <pre>
{`Example:
with open("example.txt", "w") as file:
    file.write("Hello, Python!")
`}
          </pre>
        </div>

        <div className="topic">
          <h3>7. Python Libraries</h3>
          <p>
            Python has a rich ecosystem of libraries for various domains:
          </p>
          <ul>
            <li><strong>NumPy:</strong> For numerical computations.</li>
            <li><strong>Pandas:</strong> For data manipulation and analysis.</li>
            <li><strong>Matplotlib:</strong> For data visualization.</li>
            <li><strong>Scikit-learn:</strong> For machine learning.</li>
          </ul>
          <pre>
{`Example:
import numpy as np
arr = np.array([1, 2, 3])
print(arr)
`}
          </pre>
        </div>
      </section>

      {/* Python Interview Questions */}
      <section className="interview-questions">
        <h2>Top 30 Python Interview Questions</h2>

        <div className="question">
          <h3>Q1. What is Python?</h3>
          <p>
            Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
          </p>
        </div>

        <div className="question">
          <h3>Q2. What are Python’s key features?</h3>
          <p>
            Key features of Python include:
          </p>
          <ul>
            <li>Easy to learn and use.</li>
            <li>Platform-independent.</li>
            <li>Rich library support.</li>
            <li>Dynamic typing and memory management.</li>
          </ul>
        </div>

        <div className="question">
          <h3>Q3. What are Python's data types?</h3>
          <p>
            Common data types in Python are:
          </p>
          <ul>
            <li><strong>int:</strong> Integer values.</li>
            <li><strong>float:</strong> Floating-point values.</li>
            <li><strong>str:</strong> String values.</li>
            <li><strong>list:</strong> Ordered collection of items.</li>
            <li><strong>dict:</strong> Unordered collection of key-value pairs.</li>
          </ul>
        </div>

        <div className="question">
          <h3>Q4. What is a Python function?</h3>
          <p>
            A Python function is a block of reusable code that performs a specific task. Functions are defined using the <code>def</code> keyword.
          </p>
        </div>

        <div className="question">
          <h3>Q5. What are Python’s libraries for data analysis?</h3>
          <p>
            Popular libraries include:
          </p>
          <ul>
            <li><strong>Pandas:</strong> For data manipulation.</li>
            <li><strong>NumPy:</strong> For numerical computations.</li>
            <li><strong>Matplotlib:</strong> For visualization.</li>
          </ul>
        </div>

        {/* Add remaining questions and answers similarly */}
      </section>
    </div>
  );
};

export default Python;
