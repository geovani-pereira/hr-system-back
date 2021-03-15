import Dinero from 'dinero.js';
import Employe from '../models/Employe';
import EmployeRepository from '../repositories/EmployeRepository';



interface Request {
    firstName: string,
    lastName: string,
    salary: number
}

class CreateEmployeService {
    private employeRepository: EmployeRepository;
    constructor(employeRepository: EmployeRepository) {
        this.employeRepository = employeRepository;
    }

    public async  execute(id:string) {
        
            const employe = await this.employeRepository.deleteById(id);
            if(!employe){
                throw new Error("Employe doesn't registered")
            }

            return employe;

           

        }

    }


    export default CreateEmployeService;