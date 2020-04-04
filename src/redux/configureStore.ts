import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
// import { state } from '../utils/state';

// const persistedState = state.loadState();

export const store = createStore(
    rootReducer,
    // persistedState,
    composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(() => {
//     state.saveState(store.getState());
// });
