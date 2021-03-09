import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Games extends BaseSchema {
  protected tableName = 'games'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('status')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('status')
    })
  }
}
