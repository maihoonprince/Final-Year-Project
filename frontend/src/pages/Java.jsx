import React from "react";
import "./../styles/Pages.css";

const Java = () => {
  return (
    <div className="page">
      <h1>Java Programming Language</h1>
      <p>Learn the fundamentals and advanced concepts of Java, followed by the most frequently asked Java interview questions and answers.</p>

      {/* Java Topics */}
      <section className="topics">
        <h2>Java Topics</h2>

        <div className="topic">
          <h3>1. Introduction to Java</h3>
          <p>
            Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building enterprise-level applications.
          </p>
          <pre>
{`Example:
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
          </pre>
        </div>

        <div className="topic">
          <h3>2. OOPs Concepts</h3>
          <p>
            Java is an object-oriented programming (OOP) language. The main principles of OOP are:
          </p>
          <ul>
            <li><strong>Encapsulation:</strong> Wrapping data and methods together.</li>
            <li><strong>Inheritance:</strong> Reusing code by inheriting properties.</li>
            <li><strong>Polymorphism:</strong> One function, many forms.</li>
            <li><strong>Abstraction:</strong> Hiding the implementation details from the user.</li>
          </ul>
        </div>

        <div className="topic">
          <h3>3. Java Data Types</h3>
          <p>
            Java supports primitive data types like <code>int</code>, <code>char</code>, <code>float</code>, <code>double</code>, and <code>boolean</code>. It also supports reference data types like objects and arrays.
          </p>
          <pre>
{`Example:
int age = 25;
float price = 99.99f;
String name = "Java";`}
          </pre>
        </div>

        <div className="topic">
          <h3>4. Java Control Statements</h3>
          <p>
            Control statements include loops, conditional statements, and branching:
          </p>
          <ul>
            <li><strong>If-else:</strong> Decision-making statement.</li>
            <li><strong>Switch:</strong> Selecting one option among many.</li>
            <li><strong>Loops:</strong> For, While, and Do-While loops for iteration.</li>
          </ul>
          <pre>
{`Example:
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`}
          </pre>
        </div>

        <div className="topic">
          <h3>5. Exception Handling</h3>
          <p>
            Exception handling is a mechanism to handle runtime errors, ensuring the program runs smoothly.
          </p>
          <pre>
{`Example:
try {
    int divide = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Division by zero is not allowed.");
}`}
          </pre>
        </div>

        <div className="topic">
          <h3>6. Multithreading</h3>
          <p>
            Java supports multithreading to perform multiple tasks simultaneously. Threads can be created by extending the <code>Thread</code> class or implementing the <code>Runnable</code> interface.
          </p>
          <pre>
{`Example:
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}`}
          </pre>
        </div>

        <div className="topic">
          <h3>7. Collections Framework</h3>
          <p>
            Java Collections Framework provides data structures like List, Set, Map, and their implementations like ArrayList, HashSet, and HashMap.
          </p>
          <pre>
{`Example:
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        System.out.println(list);
    }
}`}
          </pre>
        </div>
      </section>

      {/* Java Interview Questions */}
      <section className="interview-questions">
        <h2>Top 30 Java Interview Questions</h2>

        <div className="question">
          <h3>Q1. What is Java?</h3>
          <p>
            Java is a high-level, class-based, object-oriented programming language used for developing application software.
          </p>
        </div>

        <div className="question">
          <h3>Q2. What are the key features of Java?</h3>
          <p>
            Java is platform-independent, object-oriented, secure, robust, and supports multithreading.
          </p>
        </div>

        <div className="question">
          <h3>Q3. What is the difference between JDK, JRE, and JVM?</h3>
          <p>
            <ul>
              <li><strong>JDK:</strong> Java Development Kit for development.</li>
              <li><strong>JRE:</strong> Java Runtime Environment to run Java programs.</li>
              <li><strong>JVM:</strong> Java Virtual Machine to execute bytecode.</li>
            </ul>
          </p>
        </div>

        <div className="question">
          <h3>Q4. What is an object in Java?</h3>
          <p>
            An object is an instance of a class containing data and methods.
          </p>
        </div>

        <div className="question">
          <h3>Q5. What is polymorphism in Java?</h3>
          <p>
            Polymorphism allows one action to behave differently based on the context (e.g., method overloading and overriding).
          </p>
        </div>

        {/* Add remaining questions and answers similarly */}
      </section>
    </div>
  );
};

export default Java;
