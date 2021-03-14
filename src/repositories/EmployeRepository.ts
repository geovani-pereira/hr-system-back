import Employe from '../models/Employe'

class EmployeRepository{
    private employees: Employe[];


    constructor(){
        this.employees = [];
    }

    public all(): Employe[]{
        return this.employees;
    }


    public findById(id: string): Employe | undefined{
        const findEmployeById = this.employees.find(employe => employe.id === id)

        return findEmployeById;

    }

    public create(firstName: string, lastName: string, salary: number, tax_amount: string): Employe{
        const employe = new Employe(firstName,lastName,salary,tax_amount);

        this.employees.push(employe);
        
        return employe;
    }

}

export default EmployeRepository