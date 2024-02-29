// Importing necessary libraries
const fs = require("fs");

// Function to generate a random date within a range
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Function to generate a random mobile number
function randomMobile() {
  return Math.floor(Math.random() * 9000000000) + 1000000000;
}

// Function to generate a random qualification
function randomQualification() {
  const qualifications = ["Bachelor's Degree", "Master's Degree", "PhD"];
  return qualifications[Math.floor(Math.random() * qualifications.length)];
}

// Function to generate random teacher data
function generateTeachers(numTeachers) {
  const teachers = [];
  const subjects = [
    "English",
    "Nepali",
    "Mathematics",
    "Science",
    "Social Studies",
    "Computing",
    "Environment, Population and Health (EPH)",
  ];

  for (let i = 0; i < numTeachers; i++) {
    const firstNames = [
      "James",
      "John",
      "Robert",
      "Michael",
      "William",
      "David",
      "Richard",
      "Joseph",
      "Charles",
      "Thomas",
      "Mary",
      "Patricia",
      "Jennifer",
      "Linda",
      "Elizabeth",
      "Barbara",
      "Susan",
      "Jessica",
      "Sarah",
      "Karen",
    ];

    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez",
      "Anderson",
      "Taylor",
      "Thomas",
      "Hernandez",
      "Moore",
      "Martin",
      "Jackson",
      "Thompson",
      "White",
      "Lopez",
    ];

    // Function to generate a random first name
    function randomFirstName() {
      return firstNames[Math.floor(Math.random() * firstNames.length)];
    }

    // Function to generate a random last name
    function randomLastName() {
      return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    const firstName = randomFirstName();
    const lastName = randomLastName();

    const gender = Math.random() < 0.5 ? "Male" : "Female";
    const dateOfBirth = randomDate(new Date(1950, 0, 1), new Date(2000, 11, 31))
      .toISOString()
      .split("T")[0];
    const mobile = randomMobile().toString();
    const joiningDate = randomDate(new Date(2010, 0, 1), new Date())
      .toISOString()
      .split("T")[0];
    const qualification = randomQualification();
    const experience = Math.floor(Math.random() * 20) + 1;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    const password = "admin";
    const role = "teacher";

    // List of common cities
    const cities = [
      "Los Angeles",
      "New York",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ];

    // List of common states
    const states = ["CA", "TX", "FL", "NY", "PA", "IL", "OH", "GA", "NC", "MI"];

    // List of common ZIP codes
    const zipCodes = [
      "90001",
      "77001",
      "60601",
      "10001",
      "19101",
      "85001",
      "92101",
      "75201",
      "95101",
      "98101",
    ];

    // List of common countries
    const countries = [
      "USA",
      "Canada",
      "UK",
      "Australia",
      "Germany",
      "France",
      "Japan",
      "China",
      "India",
      "Brazil",
    ];

    // Function to generate a random address
    function randomAddress() {
      return Math.floor(Math.random() * 1000) + "Street";
    }

    // Function to generate a random city
    function randomCity() {
      return cities[Math.floor(Math.random() * cities.length)];
    }

    // Function to generate a random state
    function randomState() {
      return states[Math.floor(Math.random() * states.length)];
    }

    // Function to generate a random ZIP code
    function randomZipCode() {
      return zipCodes[Math.floor(Math.random() * zipCodes.length)];
    }

    // Function to generate a random country
    function randomCountry() {
      return countries[Math.floor(Math.random() * countries.length)];
    }

    // Example usage
    const address = randomAddress();
    const city = randomCity();
    const state = randomState();
    const zipCode = randomZipCode();
    const country = randomCountry();

    const teacherSubjects = [];
    for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
      const subject = subjects[Math.floor(Math.random() * subjects.length)];
      const classId = Math.floor(Math.random() * 5) + 6;
      teacherSubjects.push({
        subjectName: subject,
        classId: classId.toString(),
      });
    }

    teachers.push({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      mobile,
      joiningDate,
      qualification,
      experience,
      email,
      username,
      password,
      role,
      address,
      city,
      state,
      zipCode,
      country,
      subjects: teacherSubjects,
    });
  }

  return teachers;
}

// Generate teacher data
const numTeachers = 10;
const teacherData = generateTeachers(numTeachers);

// Write JSON data to a file
fs.writeFile("teachers.json", JSON.stringify(teacherData, null, 2), (err) => {
  if (err) {
    console.error("Error writing JSON file:", err);
    return;
  }
  console.log("JSON file has been saved successfully!");
});
