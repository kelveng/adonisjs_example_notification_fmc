import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Teams extends BaseSchema {
  protected tableName = 'teams'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('initial', 4).notNullable()
      table.string('name', 20).notNullable()
      table.string('class', 1).notNullable()      
      table.string('url_logo',100).nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
