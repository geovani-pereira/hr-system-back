import Employee from '../models/Employee'

class EmployeeRepository{
    private employees: Employee[];


    constructor(){
        this.employees = [];
    }

    public all(): Employee[]{
        return this.employees;
    }


    public findById(id: string): Employee | undefined{
        const findEmployeeById = this.employees.find(employee => employee.id === id)

        return findEmployeeById;

    }

    public deleteById(id: string): Employee | undefined{
        const findEmployeeById = this.employees.find(employee => employee.id === id)

        const index = this.employees.findIndex(employee => employee.id === id);
        
        this.employees.splice(index,1);
       
        return findEmployeeById;

    }

    public create(firstName: string, lastName: string, salary: string, tax_amount: string): Employee{
        const employee = new Employee(firstName,lastName,salary,tax_amount);

        this.employees.push(employee);
        
        return employee;
    }

}

export default EmployeeRepository