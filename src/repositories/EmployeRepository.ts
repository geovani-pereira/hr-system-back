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

    public deleteById(id: string): Employe | undefined{
        const findEmployeById = this.employees.find(employe => employe.id === id)

        const index = this.employees.findIndex(employe => employe.id === id);
        
        this.employees.splice(index,1);
       
        return findEmployeById;

    }

    public create(firstName: string, lastName: string, salary: string, tax_amount: string): Employe{
        const employe = new Employe(firstName,lastName,salary,tax_amount);

        this.employees.push(employe);
        
        return employe;
    }

}

export default EmployeRepository