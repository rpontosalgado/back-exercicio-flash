import mongoose, { Schema, Document } from "mongoose";

export enum Benefit {
  meal = 'meal',
  food = 'food',
  transport = 'transport',
  mobility = 'mobility',
  fuel = 'fuel',
  gym = 'gym',
  health = 'health',
  wellBeing = 'well-being',
  education = 'education',
  culture = 'culture'
}

export interface Address extends Document {
  street: string;
  number: number;
  complement?: string;
  district?: string;
  city: string;
  state: string;
  country: string;
  postCode: string;
}

export interface CompanyInput {
  name: string,
  tradingName: string,
  registry: string,
  address: Address,
  benefits: Benefit[]
}

export interface CompanyNameOutput {
  name: string;
}

export interface ICompany extends Document {
  name: string;
  tradingName: string;
  registry: string;
  address: Address;
  benefits: Benefit[];
}

const CompanySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  tradingName: { type: String, required: true },
  registry: { type: String, required: true, unique: true },
  address: {
    street: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String },
    district: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postCode: { type: String, required: true }
  },
  benefits: {
    type: [String],
    validate: (v: string | any[]) => Array.isArray(v) && v.length > 0
  }
});

export default mongoose.model<ICompany>(
  'Company',
  CompanySchema,
  'company'
);