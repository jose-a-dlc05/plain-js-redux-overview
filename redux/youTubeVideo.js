function setYoutubeTitle(title) {
	return {
		type: 'SET_YOUTUBE_TITLE',
		data: title,
	};
}

function upvoteYoutubeVideo() {
	return {
		type: 'UPVOTE_YOUTUBE_VIDEO',
	};
}

function downvoteYoutubeVideo() {
	return {
		type: 'DOWNVOTE_YOUTUBE_VIDEO',
	};
}

function increaseViewCount() {
	return {
		type: 'INCREASE_VIEWCOUNT',
	};
}
