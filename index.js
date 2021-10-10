import store from './redux/index.js';
const { changeCount } = require('./redux/count');

store.dispatch(changeCount(42));

// Need to fix importing modules issue
// Create action creator to setUserDetails and removeUserDetails in a user object
