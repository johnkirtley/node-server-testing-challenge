const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
	describe('CREATE /api/players', () => {
		it('should return 200 ok', async () => {
			const response = await request(server).post('/api/players').send({
				name: 'Player 29',
				number: 45,
			});
			expect(response.status).toBe(200);
		});

		it('should respond with JSON', async () => {
			const response = await request(server)
				.post('/api/players')
				.send({ name: 'Player 23', number: 45 });
			expect(response.type).toMatch(/json/i);
		});
	});

	describe('DELETE /api/players/:id', () => {
		it('should return 200 ok', async () => {
			const response = await request(server)
				.delete('/api/players/12')
				.send({ id: 12 });
			expect(response.status).toBe(200);
		});

		it('should return player deleted message', async () => {
			const response = await request(server)
				.delete('/api/players/12')
				.send({ id: 12 });
			expect(response.body.success).toBe('Player removed');
		});
	});
});
