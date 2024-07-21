import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({ response }: HttpContextContract) {
    try {
      const clients = await Client.all()
      const filteredClients = clients.map(({id, name, cpf}) => {
        return {id, name, cpf} //Deixei o ID apenas para identificar que está em ordem pelo ID
      }).reverse()
      
      return filteredClients
    } catch (error) {
      return response.unauthorized()
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = request.body()
    const searchCriteria = { cpf: payload.cpf }

    try {
      const client = await Client.firstOrCreate(searchCriteria, payload)

      if (!client.$isLocal) throw new Error("Unautorized credentials");
      
      console.log(client.$isPersisted)
      return client
    } catch (error) {
      response.badRequest({message: error.message})
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const client = await Client.findOrFail(request.param('id'))
      await client.load('sales')
      await client.sales.reverse()
      
      return client
    } catch (error) {
      return response.unauthorized()
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const userId = request.param('id')
      const body = request.body()

      const user = await Client.findOrFail(userId)
      await user.merge(body).save()
      
      return {status: 'Client Updated Successfully'}

    } catch (error) {
      return response.unauthorized()
    }    
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const clientId = request.param('id')
      const client = await Client.findOrFail(clientId)
      await client.delete()

      return { status: 'Client Deleted Successfully'}
    } catch (error) {
      return response.unauthorized()
    }
  }
}
