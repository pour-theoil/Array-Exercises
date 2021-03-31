import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)

export const getStudentById = (id) => {
    return students.find(student => student.id === id)
}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)
export const getInstructorById = (id) => {
    return instructors.find(instruct => instruct.id === id)
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) => {
    let namecase = lastName.toUpperCase()
    return students.find(student => student.lastName.toUpperCase() === namecase)
}

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) => {
    let first = fullName.split(" ")[0];
    let last = fullName.split(" ")[1];
    first = first.toUpperCase();
    last = last.toUpperCase();
    return students.find(student => {
        if(student.firstName.toUpperCase() === first) {
            if (student.lastName.toUpperCase() === last) {
                return student;
            }
        }
    })
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long
export const getInstructorOfStudent = (studentId) => {
    let studinst = {}
    students.find(student => {
        if (student.id === studentId){
            let instID = student.instructorId
            instructors.find(instructor => {
                if (instructor.id === instID) {
                    studinst = instructor;
                }
            })
        }
    })
    return studinst;
}



// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
export const getStudentWithMostLangs = () => {
    let student1 = students[0]
    let student2 = {}
    for(let i = 1; i < students.length; i++) {
        student2 = students[i]
        if (student2.languages.length > student1.languages.length) {
            student1 = students[i];
        }
    }
    return student1;
}