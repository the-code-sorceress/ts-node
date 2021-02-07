import "../dotenv/DotenvCapsule";
import { ConnectionOptions } from "typeorm";
import SnakeCaseNamingStrategy from "./SnakeCaseNamingStrategy";
import { join } from "path";

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  namingStrategy: new SnakeCaseNamingStrategy(),
  logging: (process.env.DATABASE_LOGGING === "true"),
  extra: {
    "connectionLimit": process.env.DATABASE_CONNECTION_LIMIT
  },
  entities: [
    join(__dirname, "/../Entities/*.js"),
  ],
  migrations: [
    join(__dirname, "/../migrations/*.js"),
  ],
  cli: {
    "entitiesDir": "src/Entities",
    "migrationsDir": "src/migrations",
  }
};

export = config;
