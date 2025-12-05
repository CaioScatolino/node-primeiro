import express from 'express';

const server = express();

server.get('/', (req, res) => {
    let name = `Caio`
    let age = 23
  res.send(`Olá, meu nome é ${name} e eu tenho ${age} anos.`);
});

server.listen(3000, () => { 
    console.log(`Server is running on http://localhost:3000`);
})