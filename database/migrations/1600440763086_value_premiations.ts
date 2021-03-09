import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ExtractOfBonuses extends BaseSchema {
  protected tableName = 'extract_of_bonuses'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.float('value_premiation')
      table.float('value_total')
      table.float('value_admin')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('value_premiation')
      table.dropColumn('value_total')
      table.dropColumn('value_admin')
    })
  }
}
