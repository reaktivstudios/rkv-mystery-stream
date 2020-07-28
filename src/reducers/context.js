import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Helpers.
import { storage } from '../utils';

// Constants.
import { APP_STATE } from '../shared/constants';

// State.
import { appStateReducer, getDefaultAppState } from './state';

// Actions.
import { createAppActions } from './actions';

// ============
// App context.
// ============

const AppStateContext = createContext();

// =============
// App provider.
// =============

const AppStateProvider = ({ children = null, mockAppActions = null, mockAppState = null }) => {
	// Get cache.
	const cachedAppState = storage.get(APP_STATE);

	// Use mock or cache?
	const initialAppState = mockAppState || cachedAppState || getDefaultAppState();

	// Get state, dispatch.
	const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

	// Get provider.
	const { Provider } = AppStateContext;

	// Get actions.
	let appActions = createAppActions(dispatch);

	if (mockAppActions) {
		appActions = {
			...appActions,
			...mockAppActions,
		};
	}

	// Set value.
	const value = {
		appState,
		appActions,
	};

	// Expose provider.
	return <Provider value={value}>{children}</Provider>;
};

AppStateProvider.propTypes = {
	children: PropTypes.node,
	mockAppActions: PropTypes.object,
	mockAppState: PropTypes.object,
};

// =======
// Export.
// =======

export { AppStateContext, AppStateProvider };
