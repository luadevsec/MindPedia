import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import app from "./api/routes";

AppDataSource.initialize().then(() => {
  const port = 6990;
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(error => console.log(error));
