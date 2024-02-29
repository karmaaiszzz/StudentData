const fs = require("fs");

// Array of studentIds for classId=1
const studentIds = [
  17, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 208, 209, 210, 211, 212,
  213, 214, 215, 216, 217, 218, 219, 220, 223, 236,
];

// Function to generate random marks for each subject
function generateMarks() {
  const subjects = ["English", "Nepali", "Maths", "Science", "Computer"];
  const marks = [];

  studentIds.forEach((studentId) => {
    const classId = 1; // Assuming all students are in the same class
    const academicYear = 2014;

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
