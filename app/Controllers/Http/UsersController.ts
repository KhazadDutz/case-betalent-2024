import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  //Lista os usuários
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {

    const user = await User.create({
      email: 'xablau@xablau.com',
      password: 'senha123',
    })

    console.log(user.$isPersisted)
    return user
  }

  public async show({}: HttpContextContract) {
    return 'Show'
  }

  public async update({}: HttpContextContract) {
    return 'Update'
  }

  public async destroy({}: HttpContextContract) {
    return 'Destroy'
  }
}
