import express from "express";
import routerPayment from "./routes/payment";

const app = express();
const port = 3000;

app.use("/payment", routerPayment);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
