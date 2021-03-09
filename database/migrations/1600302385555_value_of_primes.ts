import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Matches extends BaseSchema {
  protected tableName = 'matches'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.float('value')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('value')
    })
  }
}
