const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

/**
 * @swagger
 * /user/{quntidade}/{inicial}:
 *   get:
 *     tags:
 *       - Usuarios
 *     description: retorna usuarios o valor inicial começa com 0
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tamanho
 *         description: quantidade de usuarios para retorna
 *         in: path
 *         required: true
 *         type: integer
 *       - name: page
 *         description: primeiro usuario
 *         in: path
 *         required: true
 *         type: integer
 */
router.get('/:tamanho/:page', controller.get);

/**
 * @swagger
 * /user/add:
 *   post:
 *     tags: 
 *       - Usuarios
 *     description: adciona usuario
 *     produces: application/json
 */
router.post('/add', controller.post);

/**
 * @swagger
 * /user/auth:
 *   post:
 *     tags: 
 *       - Usuarios
 *     description: autentica usuarios 
 *     produces: application/json
 */
router.post('/auth', controller.postAuth);

router.get('/test', controller.getTest);

module.exports = router;