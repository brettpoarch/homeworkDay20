const initialState = {
	login:'',
	name: '',
	avatar: '',
	location: '',
	reposNumber: '',
	stars: '',
	followers: '',
	following: '',
	info: []
} 

//users is coming in as object if want to stick with user and not individual pieces of info initialState needs to be 

//const initialState = {
//  user:{
				//login: ''
		//}
//} 

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_USERS':
			//console.log(action.name)
			return {...state, login:action.login, name:action.name, location:action.location, avatar:action.avatar, reposNumber:action.reposNumber, stars:action.stars, followers:action.followers, following:action.following}
		case 'GET_INFO':
			//console.log(action.info)
			return{...state, info:action.info}
		default:
			return state
	}
}