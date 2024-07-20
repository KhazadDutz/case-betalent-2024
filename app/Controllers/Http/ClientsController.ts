import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({}: HttpContextContract) {
    try {
      const clients = await Client.all()
      const filteredClients = clients.map(({id, name, cpf}) => {
        return {id, name, cpf} //Deixei o ID apenas para identificar que está em ordem pelo ID
      }).reverse()
      
      return filteredClients
    } catch (error) {
      console.log(error)
    }
  }

  public async store({ request }: HttpContextContract) {
    const payload = request.body()
    const searchCriteria = { cpf: payload.cpf }

    try {
      const client = await Client.firstOrCreate(searchCriteria, payload)

      if (!client.$isLocal) throw new Error("Client already registered");
      
      console.log(client.$isPersisted)
      return client
    } catch (error) {
      console.log(error)
    }
  }

  public async show({ request }: HttpContextContract) {
    try {
      const clientId = request.param('id')
      const client = await Client.findOrFail(clientId)
      
      
      return client
    } catch (error) {
      console.log(error)
    }    

  }

  public async update({ request }: HttpContextContract) {
    try {
      const userId = request.param('id')
      const body = request.body()

      const user = await Client.findOrFail(userId)
      await user.merge(body).save()
      
      return {status: 'Client Updated Successfully'}

    } catch (error) {
      console.log(error)
    }    
  }

  public async destroy({ request }: HttpContextContract) {
    try {
      const clientId = request.param('id')
      const client = await Client.findOrFail(clientId)
      await client.delete()

      return { status: 'Client Deleted Successfully'}
    } catch (error) {
      
    }
  }
}
