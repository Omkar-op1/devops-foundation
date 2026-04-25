const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

const { startServer } = require('../server');

function request(port, path) {
	return new Promise((resolve, reject) => {
		const req = http.get({ hostname: '127.0.0.1', port, path }, (res) => {
			let body = '';

			res.setEncoding('utf8');
			res.on('data', (chunk) => {
				body += chunk;
			});
			res.on('end', () => {
				resolve({ statusCode: res.statusCode, body, headers: res.headers });
			});
		});

		req.on('error', reject);
	});
}

test('GET / returns status ok', async () => {
	const server = startServer(0);
	await new Promise((resolve) => server.once('listening', resolve));

	try {
		const { port } = server.address();
		const response = await request(port, '/');

		assert.equal(response.statusCode, 200);
		assert.deepEqual(response.body, '{"status":"ok"}');
		assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
	} finally {
		await new Promise((resolve) => server.close(resolve));
	}
});