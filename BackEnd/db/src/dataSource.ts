import { DataSource } from "typeorm";
 
const AppDataSource = new DataSource({
  type: "sqlite",
  database: '../database.sqlite',
  entities: ['./models/**/*.ts'],
  synchronize: true,
});


export default AppDataSource;