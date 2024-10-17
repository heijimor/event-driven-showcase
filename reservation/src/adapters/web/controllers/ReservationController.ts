import { NextFunction, Response, RequestHandler } from "express";

export class ReservationController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(201).json({ message: "Reservation has been processing" });
  }
}
