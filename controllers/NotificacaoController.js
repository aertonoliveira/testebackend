const express = require('express');
const { CadastrarMensagem } = require('../services/NotificacaoService');


const router = express.Router()

router.post('/grava_aparelho', async function(req, res) {
    try {
        console.log(req.body)
        const result = await CadastrarMensagem(req.body);
        // console.log(req.body);
        return res.status(200).send(result)

    } catch (e) {
        // console.log(e);
        return res.status(400).send(e)
    }
});

module.exports = router
