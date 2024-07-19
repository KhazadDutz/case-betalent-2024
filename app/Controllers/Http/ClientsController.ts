import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({}: HttpContextContract) {
    const clients = await Client.all()
    return clients
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'cpf'])

    const client = await Client.create({
      name: body.name,
      cpf: body.cpf,
    })

    console.log(client.$isPersisted)
    return client
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
      const body = request.only(['name', 'cpf'])

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
