import pool from "../db";
import { ResultSetHeader } from "mysql2";

interface Request {
  params: { id: string };
}

const deleteUser = async ({ params }: Request) => {
  await pool.execute<ResultSetHeader>("DELETE FROM users WHERE id = ?", [
    params.id,
  ]);
  return { message: "User deleted successfully" };
};

export default deleteUser;
