const fs = require("fs");

// Array of studentIds
const studentIds = [245, 246, 247, 248];

// Function to generate random marks for each subject
function generateMarks() {
  //Subjects for class 1-5
  const subjects = ["English", "Nepali", "Mathematics", "Science", "Computing"];
  const marks = [];

  studentIds.forEach((studentId) => {
    const classId = 1;
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
