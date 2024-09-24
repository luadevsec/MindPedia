import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: './database.sqlite',
  entities: ['./src/model/*.ts'],
  migrations: ['./migrations/*.ts'],
  synchronize: true,
});


export default AppDataSource;
