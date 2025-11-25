import express from 'express';
const app = express();

const products = [
    { 
    id: 1, 
    name: 'Producto 1', 
    price: 100, 
    categories: ['categoria1', 'categoria2'],
    },
    { 
    id: 2, 
    name: 'Producto 2', 
    price: 200, 
    categories: ['categoria2', 'categoria3'],
    },
    { 
    id: 3, 
    name: 'Producto 3', 
    price: 300, 
    categories: ['categoria4', 'categoria6'],
},
];

import welcome from './src/middlewares/welcome.js';
app.get('/', welcome);

app.get('/products', (req, res) => {
    const {category} = req.query;   

        if(category) {
            const productsFiltered = products.filter(item => 
             item.categories.includes(category)
         );
        res.json(productsFiltered);
        return;
    } 
    res.json(products);
});

app.get('/products/search', (req, res) => {
    const {name} = req.query; 

    if(!name) {
       return res.status(400).json({ error: 'Falta el parámetro name' });
    }

    const productsFiltered = products.filter(item => 
        item.name.toLowerCase().includes(name.toLowerCase())
    );

    if(productsFiltered.length == 0) {
       return res.status(404).json({ error: 'No se encontraron productos' });
    }

    res.json(productsFiltered);
});      


app.get('/products/:id', (req, res) => {
    const  id  = parseInt(req.params.id);

    const product = products.find((item) => item.id == id);
    if (!product) {
        res.status(404).json({ error: 'No existe el producto' });
    }

    res.json(product);
});

import notFound from './src/middlewares/not-found.js';
app.use(notFound);


const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));