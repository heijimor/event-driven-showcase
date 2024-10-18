import { DataSource } from "typeorm";
import { Reservation } from "../../domain/entities/Reservation";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db-reservation",
  port: 5432,
  username: "reservation",
  password: "reservation",
  database: "reservation",
  synchronize: true,
  logging: true,
  entities: [Reservation],
  subscribers: [],
  migrations: [],
});
