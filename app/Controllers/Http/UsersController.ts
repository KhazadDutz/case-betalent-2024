import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  //Lista os usuários
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  // SignUp method
  public async store({ request, response }: HttpContextContract) {
    try {
      const body = request.only(['email', 'password'])
      if (!body.email || !body.password) throw new Error("Credentials not nullable");
      
      const doesUserExist = await User.findBy('email', body.email)
      
      if (doesUserExist) throw new Error("Unprocessable Entity")
      const createdUser = await User.create({
        email: body.email,
        password: body.password,
      })
      
      return {user: createdUser}
    } catch (error) {
      return response.unauthorized({message: error.message})
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

  public async login({auth, request, response}: HttpContextContract) {
    const body = request.only(['email', 'password'])

    try {
        const token =  await auth.use('api').attempt(body.email, body.password)
        return token
    } catch (error) {
        return response.unauthorized('Invalid credentials')
    }
}

}
