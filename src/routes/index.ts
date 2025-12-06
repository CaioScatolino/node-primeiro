import express from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';

const router = express.Router();

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});


router.get('/', (req, res) => {
    let name = `Caio`
    let age = 23
    res.json({ name, age });
});


export default router;