import { createConnection } from 'typeorm';


const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const username = process.env.POSTGRES_USERNAME;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_PRODUCTIVITY_DATABASE;

const connection = createConnection({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: ['entities/*.ts'],
});

export default connection;
