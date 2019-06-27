/*
Credit: @WellPaidGeek
Purpose: Use OOP in ES6 Syntax. FCC hasn't yet covered ES6 Syntax for OOP.
            I've been researching on my own to understand it (as I come from
            a C# background) and found WPG's articles. He covered both.
Thoughts: Proud on how I remade his code from memory. The time I took to work
            through his material, revisit some FCC material, google additional
            resources. I really see what's going on here and while it is, under
            the hood, identical to the old method, it reads better. It does use
            a few less lines of code in comparison. I'm not mad at it.
*/

//Generate Base Employee Class
//Mistakes Made: Added () to class Employee {}
//               Added function to the proto method. Old habits.
class Employee {

    constructor (id, firstName, lastName, socialSecurityNum, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.socialSecurityNum = socialSecurityNum;
        this.salary = salary;
    }

    generatePaySlips () {
        let pay = this.salary / 12;
        return 'Employee Num: ' + this.id
        + '\n'
        + 'Name: ' + this.firstName + ' ' + this.lastName
        + '\n'
        + 'Social Security Number: ' + this.socialSecurityNum
        + '\n'
        + 'Pay: $' + pay;
    }
}

//Create Manager Class from Employee && Extend.
class Manager extends Employee {

    constructor (id, firstName, lastName, socialSecurityNum, salary) {
        super(id, firstName, lastName, socialSecurityNum, salary);
        this.managedEmployees = [];
    }

    addManagedEmployee (employee) {
        this.managedEmployees.push(employee);
    }

    removeManagedEmployee (employee) {
        return this.managedEmployees.filter(e => e.id !== employee.id);
    }
}

//Create Instances && Generate Slips to test.
let newEmployee = new Employee(56, 'Roger', 'Dodger', 8901, 75000.00);
let oldManager = new Manager(23, 'Selena', 'Kyle', 1234, 125000.00);

console.log(newEmployee.generatePaySlips());
console.log(oldManager.generatePaySlips());