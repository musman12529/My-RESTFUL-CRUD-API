const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models');

app.use(express.json());

app.get('/', async(req, res) => {
    try {
        const u= await user.find({});
        res.status(200).json(u);
    } catch (error) {
        console.log(error.message);
        
        
    }
    });
    app.get('/user/:id', async(req, res) => {
        try {
            const {id}=req.params;
            const u= await user.findById(id);
            res.status(200).json(u);
        } catch (error) {
            console.log(error.message);
            
            
        }
        });

app.post('/user', async(req, res) => {
    try {
        const u= await user.create(req.body);
        res.status(200).json(u);
        
    } catch (error) {
        console.log(error.message);

        
    }
    
    
    });
app.put('/user/:id', async(req, res) => {
    try {
        const {id}=req.params;
        const u=await user.findByIdAndUpdate(id,req.body);
        if(!u){
            res.status(404).json({message:"User not found"});
        }
        res.status(200).json(u);

    } catch (error) {
        console.log(error.message);
    }});
    app.delete('/user/:id', async(req, res) => {
        try {
            const {id}=req.params;
            const u=await user.findByIdAndDelete(id);
            if(!u){
                res.status(404).json({message:"User not found"});
            }
            res.status(200).json(u);
    
        } catch (error) {
            console.log(error.message);
        }});


mongoose.connect('mongodb+srv://admin:usman@cluster1.xfdslmi.mongodb.net/Rest_Api?retryWrites=true&w=majority').
then(() => app.listen(5000, () => {
    console.log('Server is running on port 3000');
    console.log('Connected to MongoDB')

    })).
catch(err => console.error('Could not connect to MongoDB', err));
