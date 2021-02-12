import { Request, Response } from "express";
import Employee, { EmployeeInput, IEmployee } from "../models/Employee";

export class EmployeeController {
  async createEmployee(req: Request, res: Response): Promise<void> {
    try {

      const input: EmployeeInput = {
        companyId: req.body.companyId,
        name: req.body.name,
        surname: req.body.surname,
        identification: req.body.identification,
        email: req.body.email
      };

      const employee: IEmployee = await Employee.create(input);

      res.status(201).send({ employee });

    } catch (error) {

      let code: number = 500;
      let message: string | undefined = error.message;
      let key: string | undefined = error.keyPattern &&
        Object.getOwnPropertyNames(error.keyPattern)[0];

      if (error.driver) {
        code = 409;
        message = `Employee with this ${key} already exists`
      }

      if (error.name === "ValidationError") {
        code = 422;
        message = "Missing inputs";
      }

      res.status(code).send({error: message});

    }
  }
}

export default new EmployeeController();