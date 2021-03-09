import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserOfRakings extends BaseSchema {
  protected tableName = 'user_of_rakings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('ranking_id').notNullable().references('id').inTable('rankings').onDelete('cascade') 
      table.integer('user_id').notNullable().references('id').inTable('users')
      table.integer('potuation')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
