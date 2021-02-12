import { Request, Response } from "express";
import mongoose from "mongoose";
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

      if (input.email.indexOf("@") < 0) {
        throw new Error("Invalid email");
      }

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

      if (error.message === "Invalid email") {
        code = 422;
      }

      if (error.name === "ValidationError") {
        code = 422;
        message = "Invalid inputs";
      }

      res.status(code).send({error: message});

    }
  }

  async getAllEmployeesByCompany(req: Request, res: Response): Promise<void> {
    try {
      
      const companyId: string = req.params.companyId;

      const employees: IEmployee[] = await Employee
        .find({
          companyId: companyId
        })
        .exec();

      res.status(200).send({
        employees,
        companyId
      });

    } catch (error) {
      res.status(500).send({error});
    }
  }
}

export default new EmployeeController();