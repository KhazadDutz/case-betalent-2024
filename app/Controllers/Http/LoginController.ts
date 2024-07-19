import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async index({}: HttpContextContract) {
    return "Hello LoginController"
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const body = request.only(['email', 'password'])
    return {
      email: body.email,
      password: body.password
    }
  }

  public async show({}: HttpContextContract) {}

}
