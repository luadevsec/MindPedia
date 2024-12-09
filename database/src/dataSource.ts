import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: './database.sqlite',
  entities: ['./src/db/model/*.ts'],
  migrations: ['./db/migrations/*.ts'],
  synchronize: true,
});


export default AppDataSource;
