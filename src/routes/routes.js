//Rotas
const index = require('./index');
const userRouter = require('./userRoute');

// app.use('/', index);
app.use('/user', userRouter);

module.exports = router;