"use strict";
exports.__esModule = true;
exports.employeeTest = void 0;
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
    employeeTest.prototype.ngOnInit = function () {
        console.log(this.id);
    };
    return employeeTest;
}());
exports.employeeTest = employeeTest;
console.log("hell1111");
