import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class Sale extends BaseModel {
  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public product: string

  @column()
  public quantity: number
  
  @column()
  public unit_price: number
  
  @column()
  public total_price: number

  @column()
  public clientId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @beforeSave()
  // public static async updateProductQuantity() {
  //   try {
  //     const payload = 
  //   } catch (error) {
      
  //   }
  // }
}

// class Sale extends Lucid {
//   // ... existing model definition

//   @beforeSave()
//   static async updateProductQuantity(sale) {
//     const product = await Product.find(sale.productId); // Assuming a productId field

//     if (!product) {
//       throw new Error('Product not found');
//     }

//     product.quantity -= sale.quantity; // Assuming a quantity field
//     await product.save();
//   }
// }