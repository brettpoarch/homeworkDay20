import axios from 'axios'
import store from '../store'

export function getUsers() {
	axios.get('https://api.github.com/users/brettpoarch').then(user=>{
		//console.log(user.data)
		store.dispatch({
			type: 'GET_USERS',
			user: user.data
		})
	})
}

export function getInfo() {
	axios.get('https://api.github.com/users/brettpoarch/repos').then(repos=>{
		console.log(repos.data)
		store.dispatch({
			type: 'GET_INFO',
			info: repos.data
		})
	})
}