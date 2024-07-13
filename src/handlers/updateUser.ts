import pool from "../db";
import { ResultSetHeader } from "mysql2";

interface User {
  name: string;
  email: string;
}

interface Request {
  body: Promise<User>;
  params: { id: string };
}

const updateUser = async ({ params, body }: Request) => {
  const updatedUser = await body;

  await pool.execute<ResultSetHeader>(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [updatedUser.name, updatedUser.email, params.id]
  );

  return { id: params.id, ...updatedUser };
};

export default updateUser;
