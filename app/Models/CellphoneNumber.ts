import Client from './Client'
import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

export default class CellphoneNumber extends BaseModel {
  @hasOne(() => Client)
  declare client: HasOne<typeof Client>

  @column({ isPrimary: true })
  public id: number

  @column()
  public number: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
