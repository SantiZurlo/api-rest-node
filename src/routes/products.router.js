import { Router } from "express";
import { getAllProducts, searchProductsByName, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js";    

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProductsByName);      
router.get('/products/:id', getProductById);

router.post('/products',createProduct);

router.delete('/products/:id',deleteProduct);

export default router;