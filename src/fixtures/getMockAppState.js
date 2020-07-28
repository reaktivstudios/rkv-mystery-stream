const { cloneDeep } = require('lodash');

/*
	=====
	NOTE:
	=====

	This file should mostly stay unchanged.

	Add any additional fixtures here, if you
	want them to be fetched via Ajax request.
*/

const keyNames = ['pizzaStoreList'];

// ============
// Bundle data.
// ============

// Set later.
const mockAppState = {};

// Loop through.
for (const key of keyNames) {
	// Build file path.
	const filePath = `./${key}.json`;

	// Add to object.
	mockAppState[key] = require(filePath);
}

// ===============
// Mock app state.
// ===============

const getMockAppState = () => {
	return cloneDeep(mockAppState);
};

// =======
// Export.
// =======

module.exports = { getMockAppState };
