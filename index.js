const redux = require('redux');

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

// console.log('initialState', initialState);

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
		case 'UPVOTE_YOUTUBE_VIDEO':
			return {
				...state,
				youtubeVideo: {
					...state.youtubeVideo,
					votes: {
						...state.youtubeVideo.votes,
						up: state.youtubeVideo.votes.up + 1,
					},
				},
			};
		case 'DOWNVOTE_YOUTUBE_VIDEO':
			return {
				...state,
				youtubeVideo: {
					...state.youtubeVideo,
					votes: {
						...state.youtubeVideo.votes,
						down: state.youtubeVideo.votes.down + 1,
					},
				},
			};
		case 'INCREASE_VIEWCOUNT':
			return {
				...state,
				youtubeVideo: {
					...state.youtubeVideo,
					viewCount: state.youtubeVideo.viewCount + 1,
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

store.dispatch(setYoutubeTitle('React Redux Tutorial'));
store.dispatch(upvoteYoutubeVideo());
store.dispatch(upvoteYoutubeVideo());
store.dispatch(upvoteYoutubeVideo());
store.dispatch(upvoteYoutubeVideo());
store.dispatch(downvoteYoutubeVideo());
store.dispatch(increaseViewCount());
