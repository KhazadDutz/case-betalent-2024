import Sale from './Sale'
import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Client extends BaseModel {
  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>

  @column({ isPrimary: true })
  public id: number
  
  @column()
  public cep: string
  
  @column()
  public cellphone_number: string

  @column()
  public city: string

  @column()
  public cpf: string
  
  @column()
  public district: string

  @column()
  public name: string

  @column()
  public street_name: string

  @column()
  public street_number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
