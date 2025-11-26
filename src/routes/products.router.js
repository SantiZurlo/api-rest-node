import { Router } from "express";
import { getAllProducts, searchProductsByName, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js";    
import { verifyToken } from "../middlewares/verify-token.js";
const router = Router();

router.use(verifyToken);

router.get('/products', getAllProducts);
router.get('/products/search', searchProductsByName);      
router.get('/products/:id', getProductById);

router.post('/products',createProduct);

router.delete('/products/:id',deleteProduct);

export default router;