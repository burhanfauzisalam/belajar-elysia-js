import pool from "../db";
import { ResultSetHeader } from "mysql2";

interface User {
  name: string;
  email: string;
}

interface Request {
  body: Promise<User>;
}

const addUser = async ({ body }: Request) => {
  const newUser = await body;

  const [result] = await pool.execute<ResultSetHeader>(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [newUser.name, newUser.email]
  );

  return { id: result.insertId, ...newUser };
};

export default addUser;
