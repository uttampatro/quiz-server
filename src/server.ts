import "reflect-metadata";
require("dotenv").config();

import cookieParser from "cookie-parser";
import { createConnection } from "typeorm";

const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");

//app config
const app = express();

//Middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

createConnection({
  type: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts", "entity/**/*.js"],
})
  .then(async (connection) => {
    console.log("Express application is up and running on port 5000");

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server is up and running on ${port}`);
    });
  })
  .catch((error) => console.log(error));
