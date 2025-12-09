import { RequestHandler } from "express";

export const interferir: RequestHandler = (req, res, next) => {
    let logged = false
    if (logged) {
        console.log("Usuário logado, pode continuar.");
        next();
        return;
    } else {
        res.json({ message: "Usuário não logado!" });
    }
};