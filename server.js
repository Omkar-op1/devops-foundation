const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

client.collectDefaultMetrics({ register: client.register });

app.get('/', (req, res) => {
	res.json({ status: 'ok' });
});

// Endpoint for Prometheus to scrape.
app.get('/metrics', async (req, res) => {
	try {
		res.set('Content-Type', client.register.contentType);
		res.end(await client.register.metrics());
	} catch (err) {
		res.status(500).end(err.message);
	}
});

function startServer(port = PORT) {
	return app.listen(port, () => {
		console.log(`Server running on http://localhost:${port}`);
	});
}

if (require.main === module) {
	startServer();
}

module.exports = { app, startServer };