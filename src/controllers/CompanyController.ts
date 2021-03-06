import { Request, Response } from "express";
import Company, { CompanyInput, CompanyNameOutput, ICompany } from "../models/Company";

export class CompanyController {
  async createCompany(req: Request, res: Response): Promise<void> {
    try {

      const input: CompanyInput = {
        name: req.body.name,
        tradingName: req.body.tradingName,
        registry: req.body.registry,
        address: req.body.address,
        benefits: req.body.benefits
      };

      const company: ICompany = await Company.create(input);

      res.status(201).send({ company });

    } catch (error) {

      let code: number = 500;
      let message: string | undefined = error.message;
      let key: string | undefined = error.keyPattern &&
        Object.getOwnPropertyNames(error.keyPattern)[0];

      if (error.driver) {
        code = 409;
        message = `Company with this ${key} already exists`
      }

      if (error.name === "ValidationError") {
        code = 422;
        message = "Missing inputs";
      }

      res.status(code).send({error: message});

    }
  }

  async getCompanyNames(req: Request, res: Response): Promise<void> {
    try {
      
      const companies: CompanyNameOutput[] = await Company
        .find( {}, { _id: 0, name: 1 } )
        .exec();

      const companyNamesArray: string[] = companies.map(item => item.name);

      res.status(200).send({
        companies: companyNamesArray
      });

    } catch (error) {
      res.status(500).send({error});
    }
  }
}

export default new CompanyController();