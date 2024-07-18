import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  //Lista os usuários
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {

    const body = request.only(['email', 'password'])

    const user = await User.create({
      email: body.email,
      password: body.password,
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
