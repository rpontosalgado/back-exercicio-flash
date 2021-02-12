import mongoose, { Schema, Document } from "mongoose";
import Company, { ICompany } from "./Company";

export interface EmployeeInput {
  company: string;
  name: string;
  surname: string;
  identification: string;
  email: string;
}

export interface IEmployee extends Document {
  company: ICompany['name'];
  name: string;
  surname: string;
  identification: string;
  email: string;
}

const EmployeeSchema: Schema = new Schema({
  company: { type: String, required: true, ref: Company },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  identification: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true }
});

export default mongoose.model<IEmployee>(
  'Employee',
  EmployeeSchema,
  'employee'
);