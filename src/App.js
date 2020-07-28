import React, { useContext, useEffect } from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

// ===
// UI.
// ===

import Panel from './components/Panel';

// =======
// Styles.
// =======

import './App.css';

// ========
// Context.
// ========

import { AppStateContext } from './reducers';

// ==========
// Constants.
// ==========

const SELECTED_KEY = 'selected';

const regions = ['All Regions', 'North', 'East', 'South', 'West'];

// ==========
// Component.
// ==========

const App = () => {
	// ==========
	// App state.
	// ==========

	const { appState, appActions } = useContext(AppStateContext);

	const { pizzaStoreList = [] } = appState;

	// =========
	// Get data.
	// =========

	const getData = () => {
		appActions.getPizzaStoreList();
	};

	useEffect(getData, []);

	// =======
	// Events.
	// =======

	const [selected, setSelected] = React.useState(
		parseInt(localStorage.getItem(SELECTED_KEY), 10) || 0
	);

	const onTabSelect = (e) => {
		setSelected(e.selected);
		localStorage.setItem(SELECTED_KEY, e.selected);
	};

	// ==========
	// Expose UI.
	// ==========

	return (
		<>
			<h1>
				<span role="img" aria-label="">
					🍕
				</span>
				Pizza-o-matic
				<span role="img" aria-label="">
					🍕
				</span>
			</h1>

			<TabStrip
				//
				selected={selected}
				onSelect={onTabSelect}
				tabPosition="left"
				animation={false}
			>
				{regions.map((region) => {
					return (
						<TabStripTab title={region} key={region}>
							<Panel data={pizzaStoreList} region={region} />
						</TabStripTab>
					);
				})}
			</TabStrip>
		</>
	);
};

export default App;
