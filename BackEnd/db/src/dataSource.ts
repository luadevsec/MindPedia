import { DataSource } from "typeorm";
 
const AppDataSource = new DataSource({
  type: "sqlite",
  database: './db/database.sqlite',
  entities: ['./db/src/models/**/*.ts'],
  synchronize: true,
});


export default AppDataSource;