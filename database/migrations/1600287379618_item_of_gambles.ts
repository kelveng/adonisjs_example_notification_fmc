import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ItemOfGambles extends BaseSchema {
  protected tableName = 'item_of_gambles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('gamble_id').notNullable().references('id').inTable('gambles').onDelete('cascade')
      table.integer('match_id').notNullable().references('id').inTable('matches').onDelete('cascade')
      table.integer('game_id').notNullable().references('id').inTable('games').onDelete('cascade')
      table.integer('winner')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
