const Notificacao = require('../models/Notificacao')



async function CadastrarMensagem(device_id) {
  try {  
      console.log(device_id.device_id)
      const cartaoToken = await new Notificacao({
        device_id: device_id.device_id,
      }).save()
      return { error: false, data: cartaoToken }
    

    // return { error: false, data: 'Usuario não encontrado' }
  } catch (e) {
    // console.log(e)
    throw { error: true, data: e }
  }
}


module.exports = { CadastrarMensagem }
