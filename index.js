const redux = require('redux');

// 1. Action creators for changing count
function changeCount(amount) {
	return {
		type: 'CHANGE_COUNT',
		data: amount,
	};
}

// 2. Reducer to handle these actions
function reducer(state = { count: 0 }, action) {
	// return new state based on the incoming action.type
	switch (action.type) {
		case 'CHANGE_COUNT':
			return {
				count: state.count + action.data,
			};
		default:
			return state;
	}
}

// 3. Create the store
const store = redux.createStore(reducer); // returns object with dispatch, subscribe and getState properties
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(changeCount(5));
store.dispatch(changeCount(5));
store.dispatch(changeCount(5 * 2));
store.dispatch(changeCount(5));
