const mongoose = require('mongoose');

const user = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', user);