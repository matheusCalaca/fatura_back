const express = require('express');
const router = express.Router();
const controller = require('../controllers/faturaController');

/**
 * @swagger
 * /fatura/{quntidade}/{inicial}:
 *   get:
 *     tags:
 *       - Fatura
 *     description: retorna Faturas o valor 'inicial' começa com 0, no head e necessario adicionar o 'userid' esse user id e retornado no user/auth
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tamanho
 *         description: quantidade de Faturas para retorna
 *         in: path
 *         required: true
 *         type: integer
*       - name: page
 *         description: primeira fatura
 *         in: path
 *         required: true
 *         type: integer
 */
router.get('/:tamanho/:page', controller.get);


/**
 * @swagger
 * /fatura/size:
 *   get:
 *     tags:
 *       - Fatura
 *     description: retorna a quantidade de Faturas , no head e necessario adicionar o 'userid' esse user id e retornado no user/auth
 *     produces:
 *       - application/json
 */
router.get('/size', controller.getSize);

/**
 * @swagger
 * /fatura/add:
 *   post:
 *     tags: 
 *       - Fatura
 *     description: adiciona fatura exmplo no e-mail 
 *     produces: application/json
 */
router.post('/add', controller.post);

/**
 * @swagger
 * /fatura/{id}:
 *   put:
 *     tags: 
 *       - Fatura
 *     description: atualiza fatura exmplo no e-mail 
 *     produces: application/json
 */
router.put('/:id', controller.put);

/**
 * @swagger
 * /fatura/{id}:
 *   delete:
 *     tags: 
 *       - Fatura
 *     description: deleta fatura exmplo no e-mail 
 *     produces: application/json
 */
router.delete('/:id', controller.delete);

module.exports = router;