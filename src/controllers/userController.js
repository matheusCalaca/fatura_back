const User = require('../model/User');
const key = require("./key");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.post = async (req, res) => {
    try {
        const user = new User(req.body);

        await bcrypt.hash(user.password, 10).then((hashedPassword) => {
            user.password = hashedPassword;
        });
        const userSave = await user.save();
        res.status(201).json(userSave);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }

};

exports.get = async (req, res) => {
    let tamanho = 20;
    let page = 1;
    if (req.params.tamanho != null) {
        tamanho = await req.params.tamanho;
    }
    if (req.params.page != null) {
        tamanho = await req.params.page;
    }

    try {
        const userFind = await User.find({})
        .limit(parseInt(tamanho)).skip(parseInt(page) - 1);
        res.status(200).json(userFind);
    } catch (err) {
        res.status(500).json({ messageErro: err.message, errorObject: err });
    }
};


exports.postAuth = async (req, res) => {
    User.findOne({ cpf: req.body.cpf }).then((user) => {
        bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
            if (isMatch) {
                var token = jwt.sign({ userId: user.id }, key.tokenKey);
                res.status(200).json({
                    userId: user.id,
                    nome: user.nome,
                    token
                })
            }
            else {
                res.status(422).json({ message: 'Invalid Password/Username' });
            }
        });
    }).catch((err) => {
        res.status(422).json({ message: 'Invalid Password/Username' });
    })
};

