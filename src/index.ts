// index.ts
import { Elysia } from "elysia";
import handlers from "./handlers";

const port = 3001;

const app = new Elysia()
  .get("/", () => handlers.home)
  .get("/users", handlers.allUsers)
  .post("/users", handlers.addUser)
  .get("/users/:id", handlers.getUserById)
  .put("/users/:id", handlers.updateUser)
  .delete("/users/:id", handlers.deleteUser);

app.listen(port);
console.log(`Server berjalan di http://localhost:${port}`);
