import { Request, Response } from 'express';
import { Product } from '../model/product';




export const index = async (req: Request, res: Response) =>{
    setTimeout(()=>{}, 5000)
    const products = await Product.findAll({})
    res.json(products)
}