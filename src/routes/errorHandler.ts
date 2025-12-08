import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res, next) => {
    res.status(404).json({ error: "Resource not found" });
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error: " + err.message });
}