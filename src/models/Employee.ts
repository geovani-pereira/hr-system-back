import {uuid} from 'uuidv4'

class Employee {
    id: string;
    firstName: string;
    lastName: string;
    salary: string;
    tax_amount: string;
    constructor(firstName: string, lastName:string, salary:string, tax_amount: string){
        this.id = uuid();
        this.firstName = firstName;
        this.lastName= lastName;
        this.salary= salary;
        this.tax_amount = tax_amount;
    }
}


export default Employee;