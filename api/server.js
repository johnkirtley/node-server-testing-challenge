const express = require('express');

const Players = require('../players/model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'api running' });
});

server.get('/api/players', (req, res) => {
	Players.find()
		.then(players => {
			res.status(200).json(players);
		})
		.catch(err => {
			console.log('Could not get players', err);
		});
});

server.post('/api/players', (req, res) => {
	const newPlayer = req.body;

	Players.add(newPlayer)
		.then(player => {
			res.status(200).json(player);
		})
		.catch(err => {
			console.log('Could not add player', err);
		});
});

server.delete('/api/players/:id', (req, res) => {
	const { id } = req.params;

	Players.remove(id)
		.then(res => {
			res.status(200).json({ success: 'Player removed' });
		})
		.catch(err => {
			console.log('Error removing player');
		});
});
