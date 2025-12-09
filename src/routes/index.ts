import express, { RequestHandler } from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';

const router = express.Router();

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

const interferir: RequestHandler = (req, res, next) => {
    let logged = false
    if (logged) {
        console.log("Usuário logado, pode continuar.");
        next();
        return;
    } else {
        res.json({ message: "" });
    }
};

router.get('/ping', interferir, (req, res) => {
    console.log("Alguém deu um ping na nossa API.");
    res.json({ message: 'pong' });
});


router.get('/', (req, res) => {
    let name = `Caio`
    let age = 23
    res.json({ name, age });
});


export default router;