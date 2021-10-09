const redux = require('redux');
const initialState = {
	count: 0,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				count: state.count - 1,
			};
		default:
			return state;
	}
}

const store = redux.createStore(reducer);
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
