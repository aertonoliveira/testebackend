const express = require('express');
const { CadastrarMensagem,buscarTodos } = require('../services/NotificacaoService');


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

router.get('/buscar_aparelhos', async function(req, res) {
    try {
        // console.log(req.body)
        const result = await buscarTodos();
        
        result.data.map(async (item)  => {
            console.log(item)
            await enviarNotificacao(item.device_id)

        })

        return res.status(200).send(result)

    } catch (e) {
        console.log(e);
        return res.status(400).send(e)
    }
});

async function enviarNotificacao(deviceId){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "to": deviceId,
    "title": "hello",
    "body": "world"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://exp.host/--/api/v2/push/send", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

module.exports = router
