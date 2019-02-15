// use dotenv library with you don't use docker or docker-compose
import * as dotenv from "dotenv";

dotenv.config();

export const DB_USER: string = process.env.POSTGRES_USER;
export const DB_PASS: string = process.env.POSTGRES_PASSWORD;
export const DB_HOST: string = process.env.POSTGRES_HOST;
export const DB_PORT: string = process.env.POSTGRES_PORT;
export const DB_DATABASE: string = process.env.POSTGRES_DATABASE;
