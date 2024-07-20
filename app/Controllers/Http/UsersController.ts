import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  //Lista os usuários
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['email', 'password'])
    try {
      const user = await User.findBy('email', body.email)
      
    } catch (error) {
      console.error(error)
    }
  }

  public async show({ request }: HttpContextContract) {
    const userId = request.param('id')
    try {
      const user = await User.find(userId)
      return user
    } catch (error) {
      console.log(error)
    }
  }

}
