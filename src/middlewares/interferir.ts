import { RequestHandler } from "express"

export const interferir: RequestHandler = (req, res, next) => {
    let logged = true

    if (logged) {
        console.log('Usuário logado')
        next()
    } else {
        console.log('Usuário não logado')
        res.status(403).json({ error: 'Usuário não logado' })
    }
}

