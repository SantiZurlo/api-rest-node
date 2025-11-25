import express from 'express';
const app = express();

import  method from './src/middlewares/method.js';
app.use(method);

app.get('/', (req, res) => {
    res.json({ message: "Bievenidos a mi API REST" });
});

import notFound from './src/middlewares/not-found.js';
app.use(notFound);
const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));