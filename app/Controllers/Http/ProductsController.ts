import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.all()
    const filteredProducts = products.map(({price, name, description, quantity}) => {
      return { name, description, price, quantity }
    })
    //Encontrar o modo de como realizar uma custom query
    await filteredProducts.sort((A, B) => {
      const a = A.name.toLowerCase()
      const b = B.name.toLowerCase()

      if (a < b) return -1
      if (a > b) return 1
      return 0
    })

    return filteredProducts
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['price', 'name', 'description', 'quantity'])

    const product = await Product.create({
      name: body.name,
      price: body.price,
      description: body.description,
      quantity: body.quantity
    })

    console.log(product.$isPersisted)
    return product
  }

  public async show({ request }: HttpContextContract) {
    try {
      const productId = request.param('id')
      const product = await Product.findOrFail(productId)
      
      return product
    } catch (error) {
      console.log(error)
    }    

  }

  public async update({ request }: HttpContextContract) {
    try {
      const productId = request.param('id')
      const body = request.only(['price', 'name', 'description', 'quantity'])

      const product = await Product.findOrFail(productId)
      await product.merge(body).save()
      
      return {status: 'Product Updated Successfully'}

    } catch (error) {
      console.log(error)
    }    
  }

  public async destroy({ request }: HttpContextContract) {
    try {
      const productId = request.param('id')
      const product = await Product.findOrFail(productId)
      await product.delete()

      return { status: 'Product Deleted Successfully'}
    } catch (error) {
      
    }
  }
}
