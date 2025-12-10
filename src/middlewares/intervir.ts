import { RequestHandler } from "express";

export const interferir: RequestHandler = (req, res, next) => {
  let logged = false;
  if (logged) {
    console.log("Usuário logado, pode continuar.");
    next();
    return;
  } else {
    res.status(403).json({ message: "Usuário não logado!" });
  }
};
