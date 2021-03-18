import EmployeeRepository from '../repositories/EmployeeRepository';


class CreateEmployeeService {
    private employeRepository: EmployeeRepository;
    constructor(employeRepository: EmployeeRepository) {
        this.employeRepository = employeRepository;
    }

    public async  execute(id:string) {
        
            const employee = await this.employeRepository.deleteById(id);
            if(!EmployeeRepository){
                throw new Error("Employee doesn't registered")
            }

            return employee;

           

        }

    }


    export default CreateEmployeeService;