import sql from "mysql2";
export const DB = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ass3",
});
