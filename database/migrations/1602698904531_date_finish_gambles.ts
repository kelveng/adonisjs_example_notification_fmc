import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Matches extends BaseSchema {
  protected tableName = 'matches'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dateTime('date_finish_gamble')
      table.string('hour_finish_gamble', 10)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('date_finish_gamble')
      table.dropColumn('hour_finish_gamble')
    })
  }
}
