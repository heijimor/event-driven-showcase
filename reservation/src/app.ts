import "reflect-metadata";
import express from "express";
import routerReservation from "./app/routes/reservation";
import { AppDataSource } from "./infrastructure/config/data-source";

const app = express();
const port = 3000;

app.use("/reservation", routerReservation);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error));
});
