import Client from './Client'
import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @hasOne(() => Client)
  declare client: HasOne<typeof Client>

  @column({ isPrimary: true })
  public id: number

  @column()
  public number: number

  @column()
  public cep: number

  @column()
  public street_name: string

  @column()
  public city: string

  @column()
  public district: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
