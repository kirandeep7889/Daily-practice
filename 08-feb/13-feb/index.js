// Task 1: Objects
const student = {
    name: "John",
    age: 18,
    grade: 12,
    subjects: ["Math", "Science", "History"]
};

// Task 2: Bind, Apply, and Call
// Function to display student information
function displayInfo(message) {
    console.log(message);
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
}

// Using bind to create a new function with student object bound
const boundDisplayInfo = displayInfo.bind(student);
boundDisplayInfo("Student Information:");

// Using apply to invoke function with different message
displayInfo.apply(student, ["Student Information with Apply:"]);

// Using call to invoke function with different message
displayInfo.call(student, "Student Information with Call:");

// Task 3: Callbacks
// Function to process subjects using a callback
function processSubjects(subjects, callback) {
    subjects.forEach(callback);
}

// Callback function to log each subject
function logSubject(subject) {
    console.log(`Studying ${subject}`);
}

// Applying callback to each subject
processSubjects(student.subjects, logSubject);

// Task 4: Map and Filter
// Function to double grades using map
function doubleGrades() {
    const doubledGrades = student.subjects.map(subject => ({
        subject,
        grade: student.grade * 2
    }));
    console.log("Original Grades:", student.grade);
    console.log("Doubled Grades:", doubledGrades.map(item => `${item.subject}: ${item.grade}`));
}

// Function to find passing subjects using filter
function passingSubjects() {
    const passing = student.subjects.filter(subject => student.grade >= 70);
    console.log("Subjects with Grade >= 70:", passing);
}

// Testing the map and filter functions
doubleGrades();
passingSubjects();
