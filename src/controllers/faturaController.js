const Fatura = require('../model/Fatura');
const User = require('../model/User');

exports.post = async (req, res) => {
    try {
        const fatura = new Fatura(req.body);
        const faturaSave = await fatura.save();
        res.status(201).json(faturaSave);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }

};
exports.put = async (req, res) => {
    try {
        const fatura = new Fatura(req.body);
        const faturaUpdate = await Fatura.updateOne({ _id: req.params.id }, {
            $set: {
                nome_empresa: fatura.nome_empresa,
                valor: fatura.valor,
                data_vencimento: fatura.data_vencimento,
                pagou: fatura.pagou
            }
        });
        res.status(200).json(faturaUpdate);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }
};
exports.delete = async (req, res) => {
    try {
        const faturaDelete = await Fatura.deleteOne({ _id: req.params.id });
        res.status(200).json(faturaDelete);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }
};
exports.get = async (req, res) => {
    let tamanho = 5;
    let page = 0;
    const userID = req.headers.userid;

    if (!userID) {
        res.status(422).json({ messageErro: 'necessario enviar o id do usuario no header', errorObject: null });
    }

    if (req.params.tamanho != null) {

        tamanho = await req.params.tamanho;
    }
    if (req.params.page != null) {
        page = await req.params.page;
    }

    try {

        const faturaFind = await Fatura.find({user: { $eq: userID }})
            .populate({ path: 'user', model: User })
            .limit(parseInt(tamanho)).skip(parseInt(page));
        res.status(200).json(faturaFind);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }
};

exports.getSize = async (req, res) => {
    try {
        const userID = req.headers.userid;
        if (!userID) {
            res.status(422).json({ messageErro: 'necessario enviar o id do usuario no header', errorObject: null });
        }
        const faturaSize = await Fatura.find({user: { $eq: userID }}).countDocuments();
        res.status(200).json(faturaSize);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }
};