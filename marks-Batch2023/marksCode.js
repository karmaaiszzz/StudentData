const fs = require("fs");

// Array of studentIds for classId=1
const studentIds = [
  11, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 148, 149, 150, 151, 152, 153, 154,
  155, 156, 157, 226, 229, 241,
];

// Function to generate random marks for each subject
function generateMarks() {
  const subjects = ["English", "Nepali", "Maths", "Science", "Computer"];
  const marks = [];

  studentIds.forEach((studentId) => {
    const classId = 1; // Assuming all students are in the same class
    const academicYear = 2020;

    subjects.forEach((subject) => {
      const marksObtained = Math.floor(Math.random() * 101); // Random marks between 0 and 100

      marks.push({
        student_id: studentId,
        subjectName: subject,
        classId: classId,
        academicYear: academicYear,
        marksObtained: marksObtained,
      });
    });
  });

  return marks;
}

// Generate marks
const marksData = generateMarks();

// Write JSON data to a file
fs.writeFile(
  "student_marks.json",
  JSON.stringify(marksData, null, 4),
  (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
      return;
    }
    console.log("JSON file has been saved successfully!");
  }
);
