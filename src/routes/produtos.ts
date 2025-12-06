import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: [] });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ produto: { id: id, name: 'Teclado', price: 90 } });
});

router.post('/', (req, res) => {
    res.json({ produtos: [] });
});

export default router;