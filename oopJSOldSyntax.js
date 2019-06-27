/*
Credit: @WellPaidGeek
Purpose: Read his articles on OOP in JS to help me better wrap my head
          around OOP in JS that I've been working through in FCC.
          Recreated his code example from memory.
          Not gonna lie, I had a small hiccup in the return of 
          generatePayslip.
          Overall, I'm pretty proud of how I did. Now I'm off to 
          refactor this in ES6 syntax.
*/

//Base class for employees.
function Employee(id, firstName, lastName, socialSecurityNum, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.socialSecurityNum = socialSecurityNum;
    this.salary = salary;
}

Employee.prototype.generatePayslip = function() {
    let pay = this.salary / 12;
    return 'Employee Num: ' + this.id
        + '\n'
        + 'Name: ' + this.firstName + ' ' + this.lastName
        + '\n'
        + 'Social Security Number: ' + this.socialSecurityNum
        + '\n'
        + 'Pay: $' + pay;
}

//Manager class, extends employee.
function Manager (id, firstName, lastName, socialSecurityNum, salary) {
    Employee.call(this, id, firstName, lastName, socialSecurityNum, salary);
    this.managedEmployees = [];
}

//Inherits methods from Employee.
Manager.prototype = Object.create(Employee.prototype);

//Adds own methods for new properties.
Manager.prototype.addManagedEmployee = function (employee) {
    this.managedEmployees.push(employee);
}

//My solution to this was a little different from his.
//His was
//this.managedEmployees.filter(function (e) { return e.id !== employee.id });
Manager.prototype.removeManagedEmployee = function (employee) {
    return this.managedEmployees.filter(e => e.id !== employee.id);
}

//Quick detour to fix the constructor.
Manager.constructor = Manager;

//Actual logic displaying results in the console.
var oneEmployee = new Employee(23, 'Carlos', 'Rual', 0001, 60000);
var theManager = new Manager(3, 'Jerome', 'Williams', 1020, 80000);

console.log(oneEmployee.generatePayslip());
console.log(theManager.generatePayslip());
theManager.addManagedEmployee(oneEmployee);
console.log(theManager.managedEmployees);
theManager.removeManagedEmployee(oneEmployee);
console.log(theManager.managedEmployees);