exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('players')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('players').insert([
				{ id: 1, name: 'Player 1', number: 10 },
				{ id: 2, name: 'Player 2', number: 15 },
				{ id: 3, name: 'Player 3', number: 64 }
			]);
		});
};
