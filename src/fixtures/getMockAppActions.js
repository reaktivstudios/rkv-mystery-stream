import { createAppActions } from '../reducers/actions';

// =================
// Mock app actions.
// =================

const getMockAppActions = () => {
	// Get actions.
	const appActions = createAppActions();

	// Set later.
	const mockAppActions = {};

	// Loop through.
	for (const key in appActions) {
		mockAppActions[key] = jest.fn();
	}

	// Expose object.
	return mockAppActions;
};

// =======
// Export.
// =======

export { getMockAppActions };
