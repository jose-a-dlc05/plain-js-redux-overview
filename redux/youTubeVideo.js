export function setYoutubeTitle(title) {
	return {
		type: 'SET_YOUTUBE_TITLE',
		data: title,
	};
}

export function upvoteYoutubeVideo() {
	return {
		type: 'UPVOTE_YOUTUBE_VIDEO',
	};
}

export function downvoteYoutubeVideo() {
	return {
		type: 'DOWNVOTE_YOUTUBE_VIDEO',
	};
}

export function increaseViewCount() {
	return {
		type: 'INCREASE_VIEWCOUNT',
	};
}

const initialState = {
	title: '',
	viewCount: 0,
	votes: {
		up: 0,
		down: 0,
	},
};

export default function youTubeVideoReducer(
	youTubeVideo = initialState,
	action
) {
	switch (action.type) {
		case 'SET_YOUTUBE_TITLE':
			return {
				...youTubeVideo,
				title: action.data,
			};
		case 'UPVOTE_YOUTUBE_VIDEO':
			return {
				youTubeVideo,
				votes: {
					...youTubeVideo.votes,
					up: youTubeVideo.votes.up + 1,
				},
			};
		case 'DOWNVOTE_YOUTUBE_VIDEO':
			return {
				...youTubeVideo,
				votes: {
					...youTubeVideo.votes,
					down: youTubeVideo.votes.down + 1,
				},
			};
		case 'INCREASE_VIEWCOUNT':
			return {
				...youTubeVideo,
				viewCount: youTubeVideo.viewCount + 1,
			};
		default:
			return youTubeVideo;
	}
}
