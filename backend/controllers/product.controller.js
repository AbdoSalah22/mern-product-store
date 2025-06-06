import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch(error){
        res.status(500).json({success: false, message: error.message});
    }
};

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No product with that id');
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Product is deleted'});
    } catch(error){
        res.status(500).json({success: false, message: "Server Error"});
    }
};
