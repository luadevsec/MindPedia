import { DataSource } from "typeorm";
import { User } from "./user";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db/database/database.sqlite",
  entities: [User],
  synchronize: true,
});
