
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lectures', (table) => {
      table.increments();
      table.string('lecture_name').notNullable();
      table.string('lecture_professor').notNullable();
      table.string('lecture_time').notNullable();
      table.string('lecture_location').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lectures');
};
