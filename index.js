const redux = require('redux');

// 1. Action creators for changing count
function changeCount(amount) {
	return {
		type: 'CHANGE_COUNT',
		data: amount,
	};
}

function addFavoriteThing(thing) {
	return {
		type: 'ADD_FAVORITE_THING',
		data: thing,
	};
}

function removeFavoriteThing(thing) {
	return {
		type: 'REMOVE_FAVORITE_THING',
		data: thing,
	};
}

function setYoutubeTitle(title) {
	return {
		type: 'SET_YOUTUBE_TITLE',
		data: title,
	};
}

const initialState = {
	count: 0,
	favoriteThings: [],
	youtubeVideo: {
		title: '',
		viewCount: 0,
		votes: {
			up: 0,
			down: 0,
		},
	},
};

console.log('initialState', initalState);

// 2. Reducer to handle these actions
function reducer(state = initialState, action) {
	// return new state based on the incoming action.type
	switch (action.type) {
		case 'CHANGE_COUNT':
			return {
				...state,
				count: state.count + action.data,
			};
		case 'ADD_FAVORITE_THING':
			return {
				...state,
				favoriteThings: [...state.favoriteThings, action.data],
			};
		case 'REMOVE_FAVORITE_THING':
			const updatedArr = state.favoriteThings.filter(
				(thing) => thing.toLowerCase() !== action.data.toLowerCase()
			);
			return {
				...state,
				favoriteThings: updatedArr,
			};
		case 'SET_YOUTUBE_TITLE':
			return {
				...state,
				youtubeVideo: {
					...state.youtubeVideo,
					title: action.data,
				},
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
store.dispatch(addFavoriteThing('Gorons'));
store.dispatch(addFavoriteThing('Zora'));
store.dispatch(setYoutubeTitle('React Redux Tutorial'));
