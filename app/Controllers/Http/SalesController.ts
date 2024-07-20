import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sale from 'App/Models/Sale'

export default class SalesController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const payload = request.body()
    try {
      const sale = await Sale.create(payload)
      console.log(sale.$isPersisted, 'ERROOOOO')
      return sale
    } catch (error) {
      console.log(error, 'ERRO')
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

// const payload = request.body()
// const searchCriteria = { cpf: payload.cpf }

// try {
//   const client = await Client.firstOrCreate(searchCriteria, payload)

//   if (!client.$isLocal) throw new Error("Client already registered");
  
//   console.log(client.$isPersisted)
//   return client
// } catch (error) {
//   console.log(error)
// }