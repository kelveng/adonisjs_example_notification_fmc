import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ExtractOfBonuses extends BaseSchema {
  protected tableName = 'extract_of_bonuses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('ranking_id').notNullable().references('id').inTable('rankings').onDelete('cascade') 
      table.integer('match_id').notNullable().references('id').inTable('matches').onDelete('cascade')
      table.integer('user_id').references('id').inTable('users')
      table.integer('gamble_id').references('id').inTable('gambles').onDelete('cascade')
      table.float('balance_ranking')
      table.float('balance_bonus')
      table.float('value_bonus')
      table.float('value_ranking')  
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
