import { cloneDeep } from 'lodash';

// Helpers.
import { storage } from '../utils';

// ==========
// Constants.
// ==========

import {
	//
	APP_STATE,
	CLEAR_APP_STATE,
	SAVE_PIZZA_STORE_LIST,
} from '../shared/constants';

// ==================
// Default app state.
// ==================

const getDefaultAppState = () => {
	return cloneDeep({
		pizzaStoreList: [],
	});
};

// ========
// Reducer.
// ========

const appStateReducer = (appState = getDefaultAppState(), action = {}) => {
	const { payload = null, type = null } = action;

	// ======================
	// New state placeholder.
	// ======================

	let newState = cloneDeep(appState);

	// ================
	// Clear app state.
	// ================

	if (type === CLEAR_APP_STATE) {
		storage.clear();
		newState = getDefaultAppState();
	}

	// ======================
	// Save pizza store list.
	// ======================

	if (type === SAVE_PIZZA_STORE_LIST && Array.isArray(payload)) {
		newState.pizzaStoreList = payload;
	}

	// ======================
	// Save in local storage.
	// ======================

	storage.set(APP_STATE, newState);

	// =================
	// Expose new state.
	// =================

	return newState;
};

// =======
// Export.
// =======

export { appStateReducer, getDefaultAppState };
