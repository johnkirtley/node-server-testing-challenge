exports.up = function(knex) {
	return knex.schema.createTable('players', player => {
		player.increments();

		player.string('name').notNullable();
		player
			.integer('number')
			.notNullable()
			.unique();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('players');
};
