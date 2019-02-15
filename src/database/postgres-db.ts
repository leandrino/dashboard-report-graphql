// tslint:disable:no-console
import { createConnection } from "typeorm";
import {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DATABASE
} from "../config/environment-variables";

// prettier-ignore
export const postgresDB = async () => {
  return createConnection({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
    ssl: false,
    synchronize: true
  }).then(connection => {
    console.log("Database connection established");
  });
};
