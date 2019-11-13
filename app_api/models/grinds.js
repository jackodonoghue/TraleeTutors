const mongoose = require('mongoose');

const grindsSchema = new mongoose.Schema({
id: String,
grindTitle: {
    type: String,
    required: true
    },        
author: {
    type: String,
    required: true
    },  
description: {
    type: String,
    required: true
},        
times: [Number], 
rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
    }
});
    
mongoose.model('Grind', grindsSchema);