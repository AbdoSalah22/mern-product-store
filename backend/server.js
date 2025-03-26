import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/api/products', async (req, res) => {
    const product = req.body;
    console.log(product);

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success: false, message: 'Please fill all fields' });
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch{
        res.status(500).json({success: false, message: error.message});
    }
});


app.delete('/api/products/:id', async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, message: 'Product is deleted'});
    } catch(error){
        res.status(404).json({success: false, message: "Product not found"});
    }
});


app.listen(5000, () => {
    connectDB();
  console.log('Server is running on port 5000 !');
});
