import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3334, () => {
    console.log("Server running on 3334");
})