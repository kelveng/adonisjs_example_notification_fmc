import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configurations extends BaseSchema {
  protected tableName = 'configurations'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('rate_bonus')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('rate_bonus')
    })
  }
}
