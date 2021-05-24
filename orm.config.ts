import { join } from "path";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const {
  DB_HOST: host,
  DB_PORT: port,
  DB_DATABASE: database,
  DB_USER: username,
  DB_PWD: password,
} = process.env;
console.info("port", port, "host", host, "__dirname", __dirname);
export const withCache: TypeOrmModuleOptions = {
  type: "mysql",
  host,
  port: Number(port),
  username,
  password,
  database,
  synchronize: false,
  logging: true,
  cache: {
    type: "redis",
    options: {
      host: "127.0.0.1",
      port: 6399,
    },
  },
  entities: [join(__dirname, "./**/**/*.entity{.d.ts,.js}")],
};
