import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class SignupController {
  public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const body = request.only(['email', 'password'])
    try {
      const user = await User.findBy('email', body.email)
      if (user) throw new Error("Unprocessable Entity")
      
      const createdUser = await User.create({
        email: body.email,
        password: body.password,
      })
  
      console.log(createdUser.$isPersisted)
      return { status: 201, message: "User Registered Successfully"}
    } catch (error) {
      return { status: 422, message: error.message }
    }
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
