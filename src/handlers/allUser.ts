import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

interface User {
  name: string;
  email: string;
}

interface Request {
  body: Promise<User>;
}

const allUsers = async () => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM users");
  return rows;
};

export default allUsers;
