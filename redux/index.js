const redux = require('redux');
const { combineReducer, createStore } = redux;
import countReducer from './count';
import favoriteThingsReducer from './favoriteThings';
import youTubeReducer from './youTubeVideo';
// import the separate reducers
// combine the reducers into a single state tree
// create the store
// export the store
