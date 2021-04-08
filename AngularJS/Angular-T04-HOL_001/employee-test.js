"use strict";
exports.__esModule = true;
var employeeTest = /** @class */ (function () {
    function employeeTest() {
        this.id = 1;
        this.name = "Jacks";
        this.salary = 10000;
        this.permanent = true;
        this.d = {
            department_id: 1,
            department_name: "Payroll"
        };
    }
    return employeeTest;
}());
console.log(new employeeTest());
