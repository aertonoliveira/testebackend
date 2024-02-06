const router = require('express').Router()

const NotificacaoController = require('../controllers/NotificacaoController')


router.use(NotificacaoController)


module.exports = router
