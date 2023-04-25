const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true,unique:true},
        pass: { type: String, required: true },
    },
    { collection: 'user-data' }
)

const model = mongoose.model('Userdata', User);

module.exports = model;