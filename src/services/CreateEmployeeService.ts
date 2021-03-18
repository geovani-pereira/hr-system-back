import Dinero from 'dinero.js';
import EmployeeRepository from '../repositories/EmployeeRepository';
import VMasker from 'vanilla-masker';


interface Request {
    firstName: string,
    lastName: string,
    salary: number
}

class CreateEmployeeService {
    private employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public async  execute({ firstName, lastName, salary }: Request) {
        var tax_amount = "A$0";
        
        if((salary >= 1820100) && (salary < 3700001)){
            let difference =   salary - 1820000;

            const oneDollarOver = difference * 0.19;

            tax_amount = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).setLocale('en-AU').toFormat('$0,0.00');
        }

        if((salary >= 3700100) && (salary <= 9000000)){
           
            let difference =   salary - 3700000;
            difference = Dinero({amount: difference, currency: 'AUD', precision:2}).getAmount();
            
            let oneDollarOver = (difference * 0.325) * 10;

            let differenceValue = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).getAmount();
                differenceValue += 3572000;
            
            
            let taxValue = Dinero({amount: differenceValue, currency: 'AUD', precision:3}).setLocale('en-AU').toFormat("$0,0.00")
           
    
            tax_amount = taxValue;


        }


        if((salary >= 9000100) && (salary <= 18000000)){
           
            let difference =   salary - 9000000;
            difference = Dinero({amount: difference, currency: 'AUD', precision:2}).getAmount();
            
            let oneDollarOver = (difference * 0.37) * 10;
            let differenceValue = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).getAmount();
                differenceValue += 20797000;
            
            
            let taxValue = Dinero({amount: differenceValue, currency: 'AUD', precision:3}).setLocale('en-AU').toFormat("$0,0.00")
           
    
            tax_amount = taxValue;


        }

        if((salary >= 18000100)){
           
            let difference =   salary - 18000000;
            difference = Dinero({amount: difference, currency: 'AUD', precision:2}).getAmount();
            
            let oneDollarOver = (difference * 0.45) * 10;

            let differenceValue = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).getAmount();
                differenceValue += 54097000;
            
            
            let taxValue = Dinero({amount: differenceValue, currency: 'AUD', precision:3}).setLocale('en-AU').toFormat("$0,0.00")
           
    
            tax_amount = taxValue;


        }

        let salarySave = VMasker.toMoney(salary, {
          
            precision: 2,

          
            separator: '.',

            delimiter: ',',

            
            unit: '$',

          
        });
            const employee = await this.employeeRepository.create(firstName, lastName, salarySave, tax_amount);
            
            return employee;

           

        }

    }


    export default CreateEmployeeService;