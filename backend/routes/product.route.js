import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch(error){
        res.status(500).json({success: false, message: error.message});
    }
});


router.post('/', async (req, res) => {
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


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No product with that id');
    }

    const product = req.body;

    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }
});


router.delete('/:id', async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, message: 'Product is deleted'});
    } catch(error){
        res.status(404).json({success: false, message: "Product not found"});
    }
});

export default router;