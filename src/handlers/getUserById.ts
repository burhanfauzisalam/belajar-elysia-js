import pool from "../db";
import { RowDataPacket } from "mysql2";

interface Request {
  params: { id: string };
}

const getUserById = async ({ params }: Request) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM users WHERE id = ?",
    [params.id]
  );
  return rows[0];
};

export default getUserById;
