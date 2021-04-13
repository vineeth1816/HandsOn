import { department } from "./department";


export interface employee{
    id:number;
    name:string;
    salary:number;
    permanent:boolean;
    d:department;
    
}