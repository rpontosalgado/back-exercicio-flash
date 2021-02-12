import mongoose from "mongoose";

export default (db: string) => {

  const connect = (): void => {
    mongoose
      .connect(
        db,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true
        }
      )
      .then(() => {
        console.info(`Successfully connected to db: ${db}`);
      })
      .catch(error => {
        console.error("Error connecting to database: ", error);
      });
  };

  connect();

  mongoose.connection.on('disconnected', connect);
};