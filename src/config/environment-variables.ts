// use dotenv library with you don't use docker or docker-compose
import * as dotenv from 'dotenv'

dotenv.config()

export const DB_USER: string = process.env.MONGO_INITDB_ROOT_USERNAME
export const DB_PASS: string = process.env.MONGO_INITDB_ROOT_PASSWORD
export const DB_PATH: string = process.env.MONGO_PATH
