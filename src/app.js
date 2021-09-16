const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

//Rotas
const index = require('./routes/index');
const userRoute = require('./routes/userRoute');
const faturaRoute = require('./routes/faturaRoute');
require('./model/Fatura')
require('./model/User')


app.use('/', index);
app.use('/user', userRoute);
app.use('/fatura', faturaRoute);

//swagger
const swaggerDocument = require('./swaggerDocs.js');
swaggerDocument(app);

// autentication
app.use(function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, key.tokenKey, function (err, payload) {
            console.log(payload)
            if (payload) {
                user.findById(payload.userId).then(
                    (doc) => {
                        req.user = doc;
                        next()
                    }
                )
            } else {
                next()
            }
        })
    } catch (e) {
        next()
    }
})



// connect to db
// mongodb+srv://<USER>:<password>@cluster0.7ysrs.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://root:root@cluster0.7ysrs.mongodb.net/fatura_calaca?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log("connected to DB."))
.catch( err => console.log(err));



module.exports = app;