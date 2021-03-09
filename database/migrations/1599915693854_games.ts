import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Games extends BaseSchema {
  protected tableName = 'games'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('match_id').notNullable().references('id').inTable('matches').onDelete('cascade')
      table.integer('master_id').notNullable().references('id').inTable('teams').onDelete('cascade')
      table.integer('visitor_id').notNullable().references('id').inTable('teams').onDelete('cascade')
      table.integer('master_gol')
      table.integer('visitor_gol')
      table.dateTime('date_game').notNullable()
      table.string('hour', 10).notNullable()
      table.integer('winner').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
