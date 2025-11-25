import { Router } from "express";
import { getAllProducts, searchProductsByName, getProductById } from "../controllers/products.controller.js";    

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProductsByName);      
router.get('/products/:id', getProductById);

export default router;