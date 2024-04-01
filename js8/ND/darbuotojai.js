// Define array to store employee records
let employees = [];

// Function to save employees to localStorage
const saveEmployees = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
}

// Function to display employees list
const showEmployees = () => {
    const list = document.getElementById("employees_list");
    const totalSalaryElement = document.getElementById("total_salary");
    const averageSalaryElement = document.getElementById("average_salary");

    // Clear previous list
    list.innerHTML = "";

    // Iterate over each employee and display them
    employees.forEach((employee, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${employee.name} ${employee.surname} - Salary: ${employee.salary}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm float-end";
        deleteButton.onclick = () => {
            employees.splice(index, 1);
            saveEmployees();
            showEmployees();
        };

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });

    // Calculate total salary and average salary
    const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
    const averageSalary = totalSalary / employees.length;

    totalSalaryElement.textContent = `Total Salary: ${totalSalary}`;
    averageSalaryElement.textContent = `Average Salary: ${averageSalary.toFixed(2)}`;
}

// Function to add new employee
const addEmployee = () => {
    const nameInput = document.getElementById("employee_name");
    const surnameInput = document.getElementById("employee_surname");
    const salaryInput = document.getElementById("employee_salary");

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const salary = parseFloat(salaryInput.value);

    // Validate inputs
    if (name === "" || surname === "" || isNaN(salary) || salary <= 0) {
        alert("Please enter valid name, surname, and salary.");
        return;
    }

    // Add new employee to the list
    employees.push({ name, surname, salary });

    // Clear input fields
    nameInput.value = "";
    surnameInput.value = "";
    salaryInput.value = "";

    // Display updated employees list
    showEmployees();

    // Save employees to localStorage
    saveEmployees();
}

// Function to clear all employees
const clearEmployees = () => {
    employees = [];
    localStorage.removeItem("employees");
    showEmployees();
}

// Add event listeners
document.getElementById("add_employee").addEventListener("click", addEmployee);
document.getElementById("clear_employees").addEventListener("click", clearEmployees);

// Retrieve employees data from localStorage on page load
const storedEmployees = localStorage.getItem("employees");
if (storedEmployees) {
    employees = JSON.parse(storedEmployees);
    showEmployees();
}
