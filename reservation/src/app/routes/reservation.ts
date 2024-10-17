import { ReservationController } from "../../adapters/web/controllers/ReservationController";
const express = require("express");
const router = express.Router();
const reservationController = new ReservationController();

router.post("/", reservationController.create);

export default router;
