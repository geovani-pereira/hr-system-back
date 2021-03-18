import { Router } from 'express';
import EmployeeRepository from '../repositories/EmployeeRepository';
import CreateEmployeeService from '../services/CreateEmployeeService';
import DeleteEmployeService from '../services/DeleteEmployeeService';

const employeesRouter = Router();
const employeeRepository = new EmployeeRepository();


employeesRouter.get('/', (request, response) => {
    const employees = employeeRepository.all();

    return response.json(employees);
})

employeesRouter.post('/', async (request, response) => {
    try {
        const { firstName, lastName, salary } = request.body;
        const createEmployee = new CreateEmployeeService(employeeRepository);

        const employee = await createEmployee.execute({ firstName, lastName, salary });

        return response.json(employee);
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }

});

employeesRouter.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const deleteEmployee = new DeleteEmployeService(employeeRepository);

        const deleted = await deleteEmployee.execute(id);
        return response.json(deleted);
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }


})
export default employeesRouter;