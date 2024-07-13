// index.ts
import { Elysia } from "elysia";
import handlers from "./handlers";

const port = 3001;

const app = new Elysia()
  .get("/", () => handlers.home)
  .get("/users", handlers.allUsers)
  .post("/user", handlers.addUser)
  .get("/user/:id", handlers.getUserById)
  .put("/user/:id", handlers.updateUser)
  .delete("/user/:id", handlers.deleteUser);

app.listen(port);
console.log(`Server berjalan di http://localhost:${port}`);
