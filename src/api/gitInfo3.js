import axios from 'axios'
import store from '../store'

export function getUsers() {
	axios.get('https://api.github.com/users/brettpoarch').then(user=>{
		//console.log(user.data.location, 'user')
		store.dispatch({
			type: 'GET_USERS',
			login: user.data.login,
			name: user.data.name,
			location: user.data.location, 
			avatar: user.data.avatar_url,
			reposNumber: user.data.public_repos,
			stars: user.data.public_gists,
			followers: user.data.followers,
			following: user.data.following
		})
	})
}

export function getInfo(){
	axios.get('https://api.github.com/users/brettpoarch/repos').then(repos=>{
		//console.log(repos.data)
		store.dispatch({
			type: 'GET_INFO',
			info: repos.data
		})
	})
}
