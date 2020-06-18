exports.seed = function (knex) {
	return knex('players')
		.del()
		.then(function () {
			return knex('players').insert([
				{ id: 1, name: 'Player 1', number: 10 },
				{ id: 2, name: 'Player 2', number: 15 },
				{ id: 3, name: 'Player 3', number: 64 },
			]);
		});
};
