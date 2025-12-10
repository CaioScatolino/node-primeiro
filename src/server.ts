import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { errorHandler, notFoundRequest } from "./routes/errorHandler";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.use("/", router);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
