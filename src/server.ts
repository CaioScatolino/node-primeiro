import express from 'express';
import helmet from  'helmet';
import path from 'path';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});
server.get('/produtos', (req, res) => {
    res.json({ produtos: [] });
});
server.post('/produtos', (req, res) => {
    res.json({ produtos: [] });
});

server.get('/', (req, res) => {
    let name = `Caio`
    let age = 23
    res.json({ name, age });
});

server.listen(3000, () => { 
    console.log(`Server is running on http://localhost:3000`);
})