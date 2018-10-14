import { createStore } from 'redux';
import rootReducer from './index';

export default function configureStore(initialState) {

  return createStore(
    // add all of the stores in the app
    rootReducer,

    // set the initial state of the redux store
    initialState,
  );
}
