const mongoose = require('mongoose');

const grindsSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
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
times: {
    type: [Number]
}, 
rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
    },
price: {
    type: Number,
    required: true
}
});
    
mongoose.model('Grind', grindsSchema);