const db = require('../data/dbConfig');

module.exports = {
	add,
	remove,
	find
};

async function add(player) {
	let newPlayer = await player;

	return db('players').insert(newPlayer);
}

function remove(id) {
	return db('players')
		.where({ id })
		.delete();
}

function find() {
	return db('players').select('id', 'name', 'number');
}
