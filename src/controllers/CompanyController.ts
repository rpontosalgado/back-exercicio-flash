import { Request, Response } from "express";
import Company, { CompanyInput, ICompany } from "../models/Company";

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

      const company = await Company.create(input);

      res.status(201).send({ company });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default new CompanyController();