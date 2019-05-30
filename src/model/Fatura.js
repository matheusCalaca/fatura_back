const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Fatura = mongoose.Schema({
    user: {

        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true

    },
    nome_empresa: {
        type: String,
        required: true,
        uppercase: true
    },
    valor: {
        type: Number,
        required: true
    },
    data_vencimento: {
        type: Date,
        required: true
    },
    pagou: {
        type: Boolean,
        default: false
    },
    dateCreate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Fatura', Fatura);