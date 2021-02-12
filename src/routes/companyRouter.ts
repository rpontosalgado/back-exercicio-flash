import express, { Router } from "express";
import CompanyController from "../controllers/CompanyController";

export const companyRouter: Router = express.Router();

companyRouter.post("/", CompanyController.createCompany);

companyRouter.get("/", CompanyController.getCompanyNames);