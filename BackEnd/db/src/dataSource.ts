import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db/database.sqlite",
  entities: ["./db/src/model/*.ts"],
  synchronize: true,
});
