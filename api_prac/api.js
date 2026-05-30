const studentCard = document.getElementsByClassName("student-card")[0];
const studentName = document.getElementsByClassName("name")[0];
const studentEmail = document.getElementsByClassName("email")[0];


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

const populateStudentsOnWebpage = async () => {
  try {
    const students = await getAllStudents();

    //LOOPS / OBJECT MANIPULATING ALGORITHMS : FOR, DO-WHILE, IF, IF-ELSE, SWITCH, CASE, DEFAULT, BREAK, CONTINUE, RETURN, THROW, TRY, CATCH, FINALLY,
    for (let index = 0; index < students.length; index++) {
      const student = students[index]; 

      const nameHeader = document.createElement("h2")
      nameHeader.innerText = student.name

      const emailHeader = document.createElement("p")
      emailHeader.innerText = student.email
      
      studentCard.appendChild(nameHeader)
      studentCard.appendChild(emailHeader)

    }
  } catch (error) {
    console.error(error);
  }
};

populateStudentsOnWebpage();