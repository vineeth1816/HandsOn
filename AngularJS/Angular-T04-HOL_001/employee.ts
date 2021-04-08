import { department } from "./department";
import { skill } from "./skill";

export interface employee{
    id:number;
    name:string;
    salary:number;
    permanent:boolean;
    d:department;
    
}