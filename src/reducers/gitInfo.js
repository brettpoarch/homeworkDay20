const initialState = {
	info: []
} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_INFO':
			return {...state, info:[...action.info]}
		default:
			return state
	}
}