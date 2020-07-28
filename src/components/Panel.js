import React from 'react';
import PropTypes from 'prop-types';

import {
	Chart,
	ChartTitle,
	ChartSeries,
	ChartSeriesItem,
	ChartCategoryAxis,
	ChartCategoryAxisItem,
} from '@progress/kendo-react-charts';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import 'hammerjs';

// ========================
// Helper: all restaurants.
// ========================

const getAllRestaurants = (list = []) => {
	// Set later.
	const newList = [];

	// Loop through.
	list.forEach(({ restaurants = [] }) => {
		newList.push(...restaurants);
	});

	// Expose array.
	return newList;
};

// ==============================
// Helper: restaurants by region.
// ==============================

const getRestaurantsByRegion = (list = [], region = '') => {
	// Set later.
	const newList = [];

	// Loop through.
	list.forEach(({ name = '', restaurants = [] }) => {
		if (String(region).toLowerCase() === String(name).toLowerCase()) {
			newList.push(...restaurants);
		}
	});

	// Expose array.
	return newList;
};

// ===================
// Helper: get rating.
// ===================

const getRating = (list = [], key = '') => {
	// Set later.
	let rating = 0;

	// Loop through.
	list.forEach(({ ratings = [] }) => {
		// Loop through.
		ratings.forEach(({ values = {} }) => {
			// Value exists?
			if (values[key]) {
				rating += Number(values[key]) / ratings.length;
			}
		});
	});

	// Expose number.
	return rating / list.length;
};

// ==========
// Component.
// ==========

const Panel = ({ data = [], region = '' }) => {
	// =========
	// Get data.
	// =========

	// Regional restaurants.
	let restaurants = getRestaurantsByRegion(data, region);

	// Fallback: all restaurants.
	if (!restaurants.length) {
		restaurants = getAllRestaurants(data);
	}

	// Line chart: X axis labels.
	const chartCategories = [
		'Customer Rating',
		'Staff Satisfaction Rating',
		'Sales Rating',
		'Cleanliness Rating',
	];

	// Line chart: data.
	const chartData = [
		getRating(restaurants, 'customer'),
		getRating(restaurants, 'staff_satisfaction'),
		getRating(restaurants, 'sales'),
		getRating(restaurants, 'cleanliness'),
	];

	// Table data.
	const gridData = [
		{ one: 1, two: 2, three: 3, four: 4 },
		{ one: 1, two: 2, three: 3, four: 4 },
		{ one: 1, two: 2, three: 3, four: 4 },
		{ one: 1, two: 2, three: 3, four: 4 },
	];

	// ==========
	// Expose UI.
	// ==========

	return (
		<>
			<Chart>
				<ChartTitle text={region} />
				<ChartCategoryAxis>
					<ChartCategoryAxisItem categories={chartCategories} />
				</ChartCategoryAxis>
				<ChartSeries>
					<ChartSeriesItem type="line" data={chartData} />
				</ChartSeries>
			</Chart>

			{/* Temporary padding. Delete this when you start */}
			<div style={{ marginBottom: '3rem' }} />

			<Grid data={gridData}>
				<Column field="one" title="One" />
				<Column field="two" title="Two" />
				<Column field="three" title="Three" />
				<Column field="four" title="Four" />
			</Grid>
		</>
	);
};

Panel.propTypes = {
	data: PropTypes.array,
	region: PropTypes.string,
};

export default Panel;
