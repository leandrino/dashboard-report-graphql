import { createConnection } from "typeorm";

export const postgresDB: createConnection = async () => {
  return createConnection({
    type: "postgres",
    host: "localhost",
    post: 5432
    username: 'root',
    password: 'root',
    database: 'buildMetrics',
    ssl: false,
    logging: ['query', 'error'],
    synchronize: true
  });
};
