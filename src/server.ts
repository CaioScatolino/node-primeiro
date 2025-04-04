import express from "express";
import helmet from "helmet";
import path from 'path';
import router from './routes'
import { errorHandler, notFoundRequest } from "./routes/errorhandler";


const server = express()

server.use(helmet()) // Security middleware
server.use(express.json()) // Middleware to parse JSON requests
server.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded requests
server.use(express.static(path.join(__dirname, '../public'))) // Middleware to serve static files


server.use('/', router) // Middleware to use the routes defined in the router
server.use(notFoundRequest) // Middleware to handle 404 errors
server.use(errorHandler) // Middleware to handle 500 errors


server.listen(3000, () => {
    console.log('Servidor is running on http://localhost:3000')
})