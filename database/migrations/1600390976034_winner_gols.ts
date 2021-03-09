import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ItemOfGambles extends BaseSchema {
  protected tableName = 'item_of_gambles'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('winner_game')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('winner_game')
    })
  }
}
