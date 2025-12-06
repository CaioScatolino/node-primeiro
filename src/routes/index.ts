import express from 'express';
const router = express.Router();


router.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

router.get('/produtos', (req, res) => {
    res.json({ produtos: [] });
});

router.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    res.json({ produto: { id: id, name: 'Teclado', price: 90 } });
});

router.post('/produtos', (req, res) => {
    res.json({ produtos: [] });
});

router.get('/voos/:from/:to', (req, res) => {

    const { from, to } = req.params;

    res.json({
        voo: {
            de: from.toUpperCase(),
            para: to.toUpperCase(),
            price: 1200
        }
    });
});

router.get('/', (req, res) => {
    let name = `Caio`
    let age = 23
    res.json({ name, age });
});


export default router;