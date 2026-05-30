//fetch api / function

// FOLLOWING CODE PRACTICES ->
// 1. Loose coupled -> code should noo depend on each other too much -> microservices.

// Function1. Fetching data and storing it temporarily
// Function2: populating the data in the webpage.
// Arrow functions

// -> React -> classNames
// HTML -> class

// const studentCard = document.getElementsByClassName("student-card")[0];
// const studentName = document.getElementsByClassName("name")[0];
// const studentEmail = document.getElementsByClassName("email")[0];

// Fetching data from the API -> Asynchronous/Synchronous [Promises -> fulfilled/fail -> comes later -> wait for it to be done successfully/unsuccessfully]
const getAllStudents = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET", //optional for GET requests
    }); //DEFAULT IS GET

    const students = await response.json();

    console.table(students);
    // FUNCTION
    /**
     * 1. Complete a block of code
     * 2. Do option 1 + return a value after execution
     * Array, object, etc
     */

    return students;
  } catch (error) {
    // All errors need to be handled gracefully-> Not block the normal functioning fo the website
    console.error(error);
    return [];
  }
};

// 1. Document Manipulation -> Updating the HTML webpage

// DOM Maanipulation -> Reactivity -> Adding events

// function -> updating / populating the DOM with new data.

const populateStudentsOnWebpage = async () => {
  try {
    const students = await getAllStudents();

    //LOOPS / OBJECT MANIPULATING ALGORITHMS
    // LOOPS, FOR, do-while, if, if-else -> JAVASCRIPT
    // Arrays -> indexes -> 0
    // 5 length -> 0,1,2,3,4
    // [1,2,3,4,5]
    for (let index = 0; index < students.length; index++) {
      const student = students[index];
      //   console.log(student);

      const nameHeader = document.createElement("h2");
      nameHeader.innerText = student.name;

      const emailHeader = document.createElement("p");
      emailHeader.innerText = student.email;

      studentCard.appendChild(nameHeader);
      studentCard.appendChild(emailHeader);
    }
  } catch (error) {
    console.error(error);
  }
};

populateStudentsOnWebpage();
