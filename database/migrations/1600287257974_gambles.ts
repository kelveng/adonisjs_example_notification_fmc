import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Gambles extends BaseSchema {
  protected tableName = 'gambles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').notNullable().references('id').inTable('users')
      table.integer('match_id').notNullable().references('id').inTable('matches').onDelete('cascade')
      table.integer('ranking_id').notNullable().references('id').inTable('rankings').onDelete('cascade') 
      table.integer('hits')
      table.boolean('is_activate')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
