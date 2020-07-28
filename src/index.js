import React from 'react';
import ReactDOM from 'react-dom';

// ===================
// Third party styles.
// ===================

import '@progress/kendo-theme-material/dist/all.css';

// =======
// Styles.
// =======

import './index.css';

// ==========
// App state.
// ==========

import { AppStateProvider } from './reducers';

// ===
// UI.
// ===

import App from './App';

// ===========
// Render app.
// ===========

const app = (
	<AppStateProvider>
		<App />
	</AppStateProvider>
);

const root = document.getElementById('root');

if (root) {
	ReactDOM.render(app, root);
}
