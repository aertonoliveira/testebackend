const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificacaoSchema = new Schema({

  device_id: { type: String },

})

module.exports = mongoose.model('Notificacao', notificacaoSchema)
