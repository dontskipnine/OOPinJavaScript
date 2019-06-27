function Employee(id, firstName, lastName, socialSecurityNum, salary) {
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.socialSecurityNum = socialSecurityNum,
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
        + 'Salary: ' + pay;
}

function Manager (id, firstName, lastName, socialSecurityNum, salary) {
    Employee.call(this, id, firstName, lastName, socialSecurityNum, salary);
    this.managedEmployees = [];
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.addManagedEmployee = function (employee) {
    this.managedEmployees.push(employee);
}

Manager.prototype.removeManagedEmployee = function (employee) {
    return this.managedEmployees.filter(e => e.id !== employee.id);
}

Manager.constructor = Manager;

var oneEmployee = new Employee(23, 'Carlos', 'Rual', 0001, 60000);
var theManager = new Manager(3, 'Jerome', 'Williams', 1020, 80000);

console.log(oneEmployee.generatePayslip());
console.log(theManager.generatePayslip());