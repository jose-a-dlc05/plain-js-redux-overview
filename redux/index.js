import redux from 'redux';
const { combineReducers, createStore } = redux;
import countReducer from './count';
const favoriteThingsReducer = require('./favoriteThings');
const youTubeVideoReducer = require('./youTubeVideo');

const rootReducer = combineReducers({
	count: countReducer,
	favoriteThings: favoriteThingsReducer,
	youTubeVideo: youTubeVideoReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
	console.log(store.getState());
});
export default store;
