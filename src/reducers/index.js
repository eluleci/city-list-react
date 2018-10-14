import { combineReducers } from 'redux';

import * as cities from './cities';

// Combine all reducers into the store
export default combineReducers({
  cities: cities.store,
});

// Generate initial state by getting initial state of each store
export const initialState = {
  cities: cities.initialState,
}
