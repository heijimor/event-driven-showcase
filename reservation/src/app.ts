import express from "express";
import routerReservation from "./routes/reservation";

const app = express();
const port = 3000;

app.use("/reservation", routerReservation);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
