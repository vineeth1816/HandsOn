import { department } from "./department";
import { employee } from "./employee";


export class employeeTest implements employee{

    id:number=1;
    name:string="Jacks";
    salary:number=10000;
    permanent:boolean=true;
    d:department={
        department_id:1,
        department_name:"Payroll"
    }
    constructor(){}
    
}
console.log("hell1111");

