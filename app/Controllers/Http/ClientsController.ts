import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({}: HttpContextContract) {
    const clients = await Client.all()
    return clients
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'cpf'])

    const client = await Client.create({
      name: body.name,
      cpf: body.cpf,
    })

    console.log(client.$isPersisted)
    return client
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
