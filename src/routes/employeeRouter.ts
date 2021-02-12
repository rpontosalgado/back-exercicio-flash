import express, { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";

export const employeeRouter: Router = express.Router();

employeeRouter.post("/", EmployeeController.createEmployee);

employeeRouter.get("/:company", EmployeeController.getAllEmployeesByCompany);