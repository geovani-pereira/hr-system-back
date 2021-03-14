import {uuid} from 'uuidv4'

class Employe {
    id: string;
    firstName: string;
    lastName: string;
    salary: number;
    tax_amount: string;
    constructor(firstName: string, lastName:string, salary:number, tax_amount: string){
        this.id = uuid();
        this.firstName = firstName;
        this.lastName= lastName;
        this.salary= salary;
        this.tax_amount = tax_amount;
    }
}


export default Employe;