const mongoose = require('mongoose');

const grindsSchema = new mongoose.Schema({
grindName: {
    type: String,
    required: true
    },        
tutor: {
    type: String,
    required: true
    },  
description: {
    type: String,
    required: true
}, 
rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
    },        
price: Number,
times: [Number]
});
    
mongoose.model('Grind', grindsSchema);