// Exercise #3 Debugging

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    state: "Stateville", // แก้จาก states เป็น state
    country: "Countryland",
    postalCode: "12345",
  },
};

console.log("Employee Name: " + employee.name); // แก้จาก employees เป็น employee
console.log("Employee Age: " + employee.age);
console.log(
  "Employee Address: " +
    employee.address.street +
    ", " +
    employee.address.city +
    ", " +
    employee.address.state + // แก้จาก states เป็น state
    ", " +
    employee.address.country +
    " " +
    employee.address.postalCode // แก้จาก adress เป็น address
);
