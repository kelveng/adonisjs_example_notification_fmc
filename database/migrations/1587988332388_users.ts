import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).nullable()
      table.string('cellphone', 15).notNullable()
      table.string('address', 15).notNullable()
      table.string('name', 50).notNullable()      
      table.string('document', 15).nullable()
      table.integer('city_id').notNullable().references('id').inTable('cities')
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
