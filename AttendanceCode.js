// Importing necessary libraries
const fs = require("fs");

// Array of student usernames
const usernames = [
  "emma.jones",
  "jordyn",
  "amaia",
  "trent",
  "tiana",
  "salem",
  "kalani",
  "leo",
  "amani",
  "kingston",
  "lance",
  "paola",
  "jesse",
  "harper",
  "matteo",
  "emerald",
  "atreus",
  "henley",
  "yousef",
  "mariana",
  "moiseys.knapp",
];

// Function to generate a random time between start and end hour
function randomTime(startHour, endHour) {
  const hour =
    Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
  const minute = Math.floor(Math.random() * 60);
  const second = Math.floor(Math.random() * 60);
  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}

// Function to generate JSON data for each student
function generateAttendanceLogs() {
  const logs = [];
  const startDate = new Date("2024-02-11");
  const endDate = new Date("2024-02-20");

  usernames.forEach((username) => {
    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + Math.floor(Math.random() * 3)) // Randomly skip some days
    ) {
      if (Math.random() < 0.4) continue; // Skip 40% of the days

      const entryTime = new Date(date);
      entryTime.setHours(8); // Random entry time between 8:00 and 10:00
      entryTime.setMinutes(Math.floor(Math.random() * 60));
      entryTime.setSeconds(Math.floor(Math.random() * 60));

      const exitTime = new Date(date);
      exitTime.setHours(14 + Math.floor(Math.random() * 3)); // Random exit time between 14:00 and 16:00
      exitTime.setMinutes(Math.floor(Math.random() * 60));
      exitTime.setSeconds(Math.floor(Math.random() * 60));

      logs.push({
        username: username,
        date: date.toISOString().split("T")[0],
        entrytime: `${date.toISOString().split("T")[0]} ${randomTime(8, 10)}`,
        exittime: `${date.toISOString().split("T")[0]} ${randomTime(14, 16)}`,
      });
    }
  });

  return logs;
}

// Generate JSON data
const jsonData = generateAttendanceLogs();

// Write JSON data to a file
fs.writeFile(
  "attendance_logs.json",
  JSON.stringify(jsonData, null, 4),
  (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
      return;
    }
    console.log("JSON file has been saved successfully!");
  }
);
