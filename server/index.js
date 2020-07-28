// Get express.
const express = require('express');

// Constants.
const { API_PATH } = require('../src/shared/constants');

// Mock state.
const { getMockAppState } = require('../src/fixtures/getMockAppState');

// ===================
// Define Express app.
// ===================

const app = express();

// ===========
// GET routes.
// ===========

app.get(`/${API_PATH}/:fileName`, (req = {}, res = { json() {} }) => {
	// Get params.
	const { params = {} } = req;

	// File name.
	const { fileName = '' } = params;

	// Object key.
	const key = fileName.split('.')[0];

	// Get data.
	const data = getMockAppState();

	// Send response.
	const sendResponse = () => {
		// Get JSON.
		const json = data[key];

		// Does JSON exist?
		if (json) {
			res.json(json);
		}
	};

	// Fake delay.
	setTimeout(sendResponse, 300);
});

// ===================
// Listen for traffic.
// ===================

app.listen(3001, () => {
	global.console.log('API server running on localhost:3001');
});
