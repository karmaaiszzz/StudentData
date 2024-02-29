const fs = require("fs");

// Array of studentIds for classId=6
const studentIds = [
  17, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 208, 209, 210, 211, 212,
  213, 214, 215, 216, 217, 218, 219, 220, 223, 236,
];

// Subjects array
const subjects = [
  "English",
  "Nepali",
  "Mathematics",
  "Science",
  "Social Studies",
  "Computing",
  "Environment, Population and Health (EPH)",
];

// Function to generate random marks for each subject
function generateMarks() {
  const marks = [];

  studentIds.forEach((studentId) => {
    const classId = 10; // Assuming all students are in the same class
    const academicYear = 2023;

    subjects.forEach((subject) => {
      let marksObtained;
      let fullMarks;
      let passMarks;

      switch (subject) {
        case "Environment, Population and Health (EPH)":
          fullMarks = 50;
          passMarks = 20;
          marksObtained =
            Math.floor(Math.random() * (fullMarks - passMarks + 1)) + passMarks; // Random marks between passMarks and fullMarks
          break;
        default:
          fullMarks = 100;
          passMarks = 40;
          marksObtained =
            Math.floor(Math.random() * (fullMarks - passMarks + 1)) + passMarks; // Random marks between passMarks and fullMarks
          break;
      }

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
