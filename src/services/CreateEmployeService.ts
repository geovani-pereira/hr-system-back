import Dinero from 'dinero.js';
import Employe from '../models/Employe';
import EmployeRepository from '../repositories/EmployeRepository';
import VMasker from 'vanilla-masker';


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

    public async  execute({ firstName, lastName, salary }: Request) {
        var tax_amount = "A$0";
        
        if((salary >= 1820100) && (salary < 3700001)){
            let difference =   salary - 1820000;

            const oneDollarOver = difference * 0.19;

            tax_amount = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).toFormat('$0,0.00');
        }

        if((salary >= 3700100) && (salary <= 9000000)){
           
            let difference =   salary - 3700000;
            difference = Dinero({amount: difference, currency: 'AUD', precision:2}).getAmount();
            
            let oneDollarOver = (difference * 0.325) * 10;

            let differenceValue = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).getAmount();
                differenceValue += 3572000;
            
            
            let valorImposto2 = Dinero({amount: differenceValue, currency: 'AUD', precision:3}).toFormat("$0,0.00")
           
    
            tax_amount = valorImposto2;


        }


        if((salary >= 9000100) && (salary <= 18000000)){
           
            let difference =   salary - 9000000;
            difference = Dinero({amount: difference, currency: 'AUD', precision:2}).getAmount();
            
            let oneDollarOver = (difference * 0.37) * 10;
            let differenceValue = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).getAmount();
                differenceValue += 20797000;
            
            
            let taxValue = Dinero({amount: differenceValue, currency: 'AUD', precision:3}).toFormat("$0,0.00")
           
    
            tax_amount = taxValue;


        }

        if((salary >= 18000100)){
           
            let difference =   salary - 18000000;
            difference = Dinero({amount: difference, currency: 'AUD', precision:2}).getAmount();
            
            let oneDollarOver = (difference * 0.45) * 10;

            let differenceValue = Dinero({amount: oneDollarOver, currency: 'AUD', precision:2}).getAmount();
                differenceValue += 54097000;
            
            
            let taxValue = Dinero({amount: differenceValue, currency: 'AUD', precision:3}).toFormat("$0,0.00")
           
    
            tax_amount = taxValue;


        }

        let salarySave = VMasker.toMoney(salary, {
            // Decimal precision -> "90"
            precision: 2,

            // Decimal separator -> ",90"
            separator: '.',

            // Number delimiter -> "12.345.678"
            delimiter: ',',

            // Money unit -> "R$ 12.345.678,90"
            unit: '$',

            // Money unit -> "12.345.678,90 R$"
            // suffixUnit: '$',

            // Force type only number instead decimal,
            // masking decimals with ",00"
            // Zero cents -> "R$ 1.234.567.890,00"
            // zeroCents: true
        });
            const employe = await this.employeRepository.create(firstName, lastName, salarySave, tax_amount);
            
            return employe;

           

        }

    }


    export default CreateEmployeService;