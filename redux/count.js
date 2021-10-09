function changeCount(amount) {
	return {
		type: 'CHANGE_COUNT',
		data: amount,
	};
}

function countReducer(count = 0, action) {
	switch (action.type) {
		case 'CHANGE_COUNT':
			return count + action.data;
	}
}
