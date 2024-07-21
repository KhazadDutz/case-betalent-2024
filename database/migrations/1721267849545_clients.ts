import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('cep').notNullable
      table.string('cellphone_number').notNullable()
      table.string('city').notNullable()
      table.string('cpf').notNullable()
      table.string('district').notNullable()
      table.string('name').notNullable()
      table.string('street_name').notNullable()
      table.integer('street_number').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
