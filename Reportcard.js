// Array containing course data
const courses = [
    { code: "ACCT 8112", name: "Principles of Accounting I", credits: 3, semester: 1 },
    { code: "EDRM 8113", name: "Study and Research Methods", credits: 2, semester: 1 },
    { code: "ENGL 8115", name: "General English", credits: 3, semester: 1 },
    { code: "RELB 8116", name: "Introduction to Bible Study", credits: 2, semester: 1 },
    { code: "INSY 8117", name: "Introduction to Computer Applications", credits: 3, semester: 1 },
    { code: "AMAT 8111", name: "Applied Mathematics", credits: 3, semester: 1 },
    { code: "STAT 8122", name: "Descriptive Statistics", credits: 3, semester: 2 },
    { code: "ENGL 8124", name: "Academic English Writing", credits: 3, semester: 2 },
    { code: "RELT 8123", name: "Bible Doctrines", credits: 3, semester: 2 },
    { code: "INSY 8121", name: "Computer Maintenance", credits: 3, semester: 2 },
    { code: "INSY 8122", name: "Introduction to Computer Programming", credits: 4, semester: 2 },
    { code: "MATH 8126", name: "Digital Computer Fundamentals", credits: 3, semester: 2 },
    { code: "INSY 8211", name: "Computer Networks", credits: 4, semester: 3 },
    { code: "INSY 8212", name: "Programming with C", credits: 4, semester: 3 },
    { code: "INSY 8215", name: "Software Engineering", credits: 3, semester: 3 },
    { code: "MATH 8213", name: "Multivariable Calculus and ODE", credits: 4, semester: 3 },
    { code: "HELT 8214", name: "Health Principles", credits: 2, semester: 4 },
    { code: "INSY 8221", name: "Object-Oriented Programming", credits: 4, semester: 4 },
    { code: "INSY 8222", name: "Database Management Systems", credits: 3, semester: 4 },
    { code: "INSY 8223", name: "Operating Systems", credits: 4, semester: 4 },
    { code: "STAT 8225", name: "Probability and Statistics", credits: 3, semester: 4 },
    { code: "SENG 8224", name: "Requirements Engineering", credits: 3, semester: 4 },
    { code: "INSY 8312", name: "Java Programming", credits: 4, semester: 5 },
    { code: "COSC 8312", name: "Introduction to Linux", credits: 3, semester: 5 },
    { code: "INSY 8313", name: "Management Information Systems", credits: 3, semester: 5 },
    { code: "COSC 8314", name: "Web Design", credits: 3, semester: 5 },
    { code: "INSY 8311", name: "Database Development with PL/SQL", credits: 3, semester: 5 },
    { code: "SENG 8315", name: "Software Project Management", credits: 3, semester: 5 },
    { code: "INSY 8321", name: "Data Structures and Algorithms", credits: 4, semester: 6 },
    { code: "INSY 8322", name: "Web Technologies and Internet", credits: 4, semester: 6 },
    { code: "SENG 8323", name: "Software Modeling & Design", credits: 3, semester: 6 },
    { code: "SENG 8324", name: "Software Quality Assurance", credits: 3, semester: 6 },
    { code: "SENG 8325", name: "Software Testing Techniques", credits: 3, semester: 6 },
    { code: "RELT 8221", name: "Philosophy, Science and Religion", credits: 2, semester: 7 },
    { code: "INSY 8411", name: "Dot Net", credits: 4, semester: 7 },
    { code: "INSY 8413", name: "Introduction to Big Data", credits: 3, semester: 7 },
    { code: "INSY 8414", name: "Mobile Programming", credits: 4, semester: 7 },
    { code: "SENG 8414", name: "Software Security", credits: 3, semester: 7 },
    { code: "SENG 8415", name: "Best Programming Practice & Design Patterns", credits: 3, semester: 7 },
    { code: "BSAD 8225", name: "Entrepreneurship", credits: 3, semester: 8 },
    { code: "INSY 8421", name: "Internship", credits: 4, semester: 8 },
    { code: "INSY 8422", name: "Final Year Project", credits: 6, semester: 8 }
];

// Define **lighter** highlight colors
const colors = ["#d4f4dd", "#fffacd", "#f4cccc","#ffffff"]; // Light green, light yellow, light red, white

// Get the table body element
const tableBody = document.getElementById("tableBody");

// Function to update the "Green Credits Total" row
function updateGreenCreditsTotal() {
    let greenCredits = 0;

    document.querySelectorAll("tbody tr").forEach(row => {
        if (row.style.backgroundColor === "rgb(212, 244, 221)") { // Check for light green color
            greenCredits += parseInt(row.dataset.credits);
        }
    });

    document.getElementById("greenCreditsTotal").textContent = greenCredits;
    document.getElementById("remainingCredits").textContent = totalCredits - greenCredits;
}

// Function to generate the table dynamically
courses.forEach(course => {
    const row = document.createElement("tr");
    row.dataset.credits = course.credits; // Store credits in dataset

    // Create and append table cells (td)
    Object.values(course).forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    // Track clicks for each row
    row.dataset.clickCount = 0;

    // Add event listener to cycle through colors on click
    row.addEventListener("click", function () {
        let count = parseInt(this.dataset.clickCount);
        this.style.backgroundColor = colors[count % colors.length];
        this.dataset.clickCount = count + 1;

        // Update the green credits total
        updateGreenCreditsTotal();
    });

    // Append row to table
    tableBody.appendChild(row);
});

// Calculate total credits
const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

// Create and append the total credits row
const totalRow = document.createElement("tr");
totalRow.innerHTML = `
    <td> Green = Done</td>
    <td>Total Credits</td>
    <td>${totalCredits}</td>
    <td></td>
`;
tableBody.appendChild(totalRow);

// Create and append the "Green Credits Total" row
const greenCreditsRow = document.createElement("tr");
greenCreditsRow.innerHTML = `
    <td> Yellow = Doing</td>
    <td>Current Total Credits</td>
    <td id="greenCreditsTotal">0</td>
    <td></td>
`;
tableBody.appendChild(greenCreditsRow);

// Create and append the "Remaining Credits to Go" row
const remainingCreditsRow = document.createElement("tr");
remainingCreditsRow.innerHTML = `
    <td> Red = Re-do</td>
    <td>Remaining Credits to Go</td>
    <td id="remainingCredits">${totalCredits}</td>
    <td></td>
`;
tableBody.appendChild(remainingCreditsRow);