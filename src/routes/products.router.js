import { Router } from "express";
import { getAllProducts, searchProductsByName, getProductById, createProduct } from "../controllers/products.controller.js";    

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProductsByName);      
router.get('/products/:id', getProductById);

router.post('/products',createProduct);

export default router;