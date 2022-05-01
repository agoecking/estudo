import { Router } from "express";
import { BookController } from "../controllers/BookController";

const routes = Router();

routes.get("/", (request, response) => {
    response.json({ message: "App"});
})

routes.get("/book/list", new BookController().list)
routes.post("/book/register", new BookController().register)
export { routes };