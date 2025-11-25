import express from 'express';
const app = express();


import welcome from './src/middlewares/welcome.js';
app.get('/', welcome);

import productsRouter from './src/routes/products.router.js';
app.use('/api', productsRouter);

import notFound from './src/middlewares/not-found.js';
app.use(notFound);


const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));