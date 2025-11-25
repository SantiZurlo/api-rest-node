import express from 'express';
import "dotenv/config";
const app = express();

app.use(express.json());

import welcome from './src/middlewares/welcome.js';
app.get('/', welcome);

import authRouter from './src/routes/auth.router.js';  
app.use('/api/auth', authRouter);

import productsRouter from './src/routes/products.router.js';
app.use('/api', productsRouter);

import notFound from './src/middlewares/not-found.js';
app.use(notFound);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));