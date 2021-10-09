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

function favoriteThingsReducer(favoriteThings = [], action) {
	switch (action.type) {
		case 'ADD_FAVORITE_THING':
			return [...favoriteThings, action.data];
		case 'REMOVE_FAVORITE_THING':
			const updatedArr = favoriteThings.filter(
				(thing) => thing.toLowerCase() !== action.data.toLowerCase()
			);
			return updatedArr;
		default:
			return favoriteThings;
	}
}
