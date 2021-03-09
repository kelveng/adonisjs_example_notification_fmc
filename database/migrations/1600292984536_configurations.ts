import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configurations extends BaseSchema {
  protected tableName = 'configurations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('price_gamble')
      table.integer('rate_admin')
      table.integer('rate_ranking')
      table.integer('premiation')      
      table.integer('ranking_id').notNullable().references('id').inTable('rankings').onDelete('cascade') 
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
