import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { companyRouter } from "./routes/companyRouter";
import { employeeRouter } from "./routes/employeeRouter";
import connect from "./connect";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

 const db: string = "mongodb://localhost:27017/flash";
 connect(db);