// =====================
// App action constants.
// =====================

import {
	//
	API_PATH,
	CLEAR_APP_STATE,
	SAVE_PIZZA_STORE_LIST,
} from '../shared/constants';

// ================
// Local constants.
// ================

const GET = 'GET';

// =====================
// Default Ajax options.
// =====================

const ajaxOptions = {
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json',
	},
};

// ================
// API path helper.
// ================

const getApiRoot = () => {
	// Build URL.
	const origin = './';
	const root = `${origin}/${API_PATH}`;

	// Expose string.
	return root;
};

// ============
// App actions.
// ============

const createAppActions = (dispatch = () => {}) => {
	// ================
	// Clear app state.
	// ================

	const clearAppState = () => {
		dispatch({
			type: CLEAR_APP_STATE,
		});
	};

	// =====================
	// Get pizza store list.
	// =====================

	const getPizzaStoreList = async () => {
		// Build URL.
		const root = getApiRoot();
		const path = 'pizzaStoreList.json';
		const url = `${root}/${path}`;

		// Build options.
		const options = {
			...ajaxOptions,
			method: GET,
		};

		// Ajax.
		try {
			const result = await fetch(url, options);
			const payload = await result.json();

			dispatch({
				payload,
				type: SAVE_PIZZA_STORE_LIST,
			});
		} catch (e) {
			// No-op.
		}
	};

	// ==============
	// Bundle object.
	// ==============

	return {
		clearAppState,
		getPizzaStoreList,
	};
};

// =======
// Export.
// =======

export { createAppActions };
