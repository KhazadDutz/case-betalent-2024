import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sale from 'App/Models/Sale'

export default class SalesController {
  public async store({ request, response }: HttpContextContract) {
    const payload = request.body()
    try {
      const sale = await Sale.create(payload)
      return sale
    } catch (error) {
      console.log(error)
      return response.badRequest()
    }
  }
}