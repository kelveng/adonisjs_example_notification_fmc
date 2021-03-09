import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rakings extends BaseSchema {
  protected tableName = 'rankings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('description', 20).notNullable()
      table.integer('value')
      table.dateTime('date_initial').notNullable()   
      table.dateTime('date_final').notNullable()   
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
