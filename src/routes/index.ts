import express, { RequestHandler } from "express";
import produtosRouter from "./produtos";
import voosRouter from "./voos";
import { interferir } from "../middlewares/intervir";

const router = express.Router();

//router.use(interferir);

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
  console.log("Alguém deu um ping na nossa API.");
  res.json({ message: "pong" });
});

router.get("/", (req, res) => {
  console.log(`PARAMS`, req.params);
  console.log(`QUERY`, req.query);
  console.log(`BODY`, req.body);

  let name = `Caio`;
  let age = 23;
  res.json({ name, age });
});

export default router;
