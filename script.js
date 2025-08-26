// script.js

// =========================
// ❤️ Part 1: JavaScript Basics
// =========================

// Variables and Data Types
let systemName = "Employee Information Management System";
let currentYear = new Date().getFullYear();

// Example: Output a welcome message to console
console.log("Welcome to " + systemName + " - " + currentYear);

// Example: Simple conditionals
let isLoggedIn = false;
if (isLoggedIn) {
  console.log("User is logged in ✅");
} else {
  console.log("Guest mode active ❌");
}

// =========================
// ❤️ Part 2: Functions
// =========================

// Function to calculate age from birth date
function calculateAge(birthDate) {
  let today = new Date();
  let birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  let monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Function to format salary with commas
function formatSalary(salary) {
  return Number(salary).toLocaleString("en-US") + " ETB";
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  console.log("Dark mode toggled!");
}

// =========================
// 🔁 Part 3: Loops
// =========================

// Example employee roles
let roles = ["Lecturer", "Manager", "Admin", "HR", "Engineer"];

// Loop through roles and print them
for (let i = 0; i < roles.length; i++) {
  console.log("Role " + (i + 1) + ": " + roles[i]);
}

// Simple countdown using while loop
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// =========================
// 🌐 Part 4: DOM Manipulation
// =========================

document.addEventListener("DOMContentLoaded", function () {
  // Add a dynamic footer year
  let footer = document.querySelector(".footer p");
  footer.textContent = `© ${currentYear} Employee Information Management System`;

  // Handle form submission
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // Capture user input
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthDate = document.getElementById("birthDate").value;
    let age = calculateAge(birthDate);
    let salary = document.getElementById("salary").value;

    // Validate password
    let password = document.getElementById("password").value;
    let conpassword = document.getElementById("conpassword").value;

    if (password !== conpassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add new employee to table
    let table = document.querySelector("table tbody");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${document.getElementById("middleName").value}</td>
      <td>${lastName}</td>
      <td>${document.getElementById("phone").value}</td>
      <td>${document.getElementById("email").value}</td>
      <td>${document.getElementById("sex").value.charAt(0)}</td>
      <td>${birthDate}</td>
      <td>${age}</td>
      <td>${document.getElementById("recruitDate").value}</td>
      <td>0</td>
      <td>${document.getElementById("role").value}</td>
      <td>${formatSalary(salary)}</td>
    `;
    table.appendChild(newRow);

    alert(`Employee ${firstName} ${lastName} registered successfully!`);

    // Reset form
    form.reset();
  });

  // Create a Dark Mode button dynamically
  let darkBtn = document.createElement("button");
  darkBtn.textContent = "Toggle Dark Mode";
  darkBtn.style.marginTop = "1rem";
  darkBtn.onclick = toggleDarkMode;
  document.querySelector(".sidebar").appendChild(darkBtn);
});
