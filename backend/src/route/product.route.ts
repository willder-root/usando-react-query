import { Router } from 'express';
import { index } from '../controller/product.controller';


const productRoute = Router();


productRoute.get('/product', index);

export  default productRoute
