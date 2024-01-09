import express from 'express';
import { getProduct } from '../controllers/productControllers.js';

const productRoutes = express.Router();

productRoutes.get("/get-product", getProduct);

export default productRoutes;