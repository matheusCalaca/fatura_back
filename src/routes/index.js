const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send(
        "<h1>fatura - Matheus Calaça - para ver os endponints acessa <a href=\"http://localhost:3000/api-docs/\">/api-docs</a></h1>"
    );
});
module.exports = router;