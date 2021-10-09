const redux = require('redux');

// 1. Action creators for increment, decrement, double and halve
function increment() {
	return {
		type: 'INCREMENT',
	};
}

function decrement() {
	return {
		type: 'DECREMENT',
	};
}

function double() {
	return {
		type: 'DOUBLE',
	};
}

function halve() {
	return {
		type: 'HALVE',
	};
}

// 2. Reducer to handle these actions
function reducer(state = { count: 0 }, action) {
	// return new state based on the incoming action.type
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				count: state.count - 1,
			};
		case 'DOUBLE':
			return {
				count: state.count * 2,
			};
		case 'HALVE':
			return {
				count: Math.floor(state.count / 2),
			};
		default:
			return state;
	}
}

// ACTIONS are an object
// ACTIONS require a property called "type", which by convention requires a capitalized string and if words are separated you would do so with an underscore
// The value is a string description of the kind of change you want to make to state
// ACTIONS are objects that tells your reducer what you're trying to do(type) and what info it needs to do that(payload), what your reducer is operating on and using it to help return new state

// ACTION CREATORS are an action object creator function

// REDUCERS take in state and that action, depending on the type, its going to tell it what to do
