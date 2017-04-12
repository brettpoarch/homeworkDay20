const initialState = {
	user:{
		login: '',
		name: '',
		avatar: '',
		info: []
	}
} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_USERS':
			//console.log(action.user)
			return {...state, user: action.user}
		case 'GET_INFO':
			//console.log(action.info)
			return {...state, info: action.info}
		default:
			return state
	}
}



//users is coming in as object if want to stick with user and not individual pieces of info initialState needs to be 

//const initialState = {
//  user:{
				//login: ''
		//}
//} 