import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class Sale extends BaseModel {
  @hasOne(() => Client)
  declare client: HasOne<typeof Client>
  
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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
