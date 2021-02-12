import mongoose, { Schema, Document } from "mongoose";
import { ICompany } from "./Company";

export interface IEmployee extends Document {
  companyId: ICompany['_id'];
  company: ICompany['name'];
  name: string;
  surname: string;
  identification: string;
  email: string;
}

const EmployeeSchema: Schema = new Schema({
  companyId: { type: Schema.Types.ObjectId, required: true },
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