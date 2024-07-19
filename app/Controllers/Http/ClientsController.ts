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

  public async show({}: HttpContextContract) {
    return 'SHOW CLIENTS'
  }

  public async update({}: HttpContextContract) {
    return 'UPDATE CLIENTS'
  }

  public async destroy({}: HttpContextContract) {
    return 'DESTROY CLIENTS'
  }
}
