import express from "express";
import Connection from "./config/conn.js";
import router from "./Routes/routes.js";

const app = express();
app.use(express.json());
app.use(router);

Connection();

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`the server is running at port ${port}`);
});
