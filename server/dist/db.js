"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5433,
    database: "perntodo"
});
exports.default = pool;
