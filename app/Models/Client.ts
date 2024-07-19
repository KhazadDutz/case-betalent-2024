import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import CellphoneNumber from './CellphoneNumber'
import Sale from './Sale'

export default class Client extends BaseModel {
  @belongsTo(() => CellphoneNumber)
  declare cellphone: BelongsTo<typeof CellphoneNumber>

  @belongsTo(() => Sale)
  declare sale: BelongsTo<typeof Sale>

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public cpf: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
