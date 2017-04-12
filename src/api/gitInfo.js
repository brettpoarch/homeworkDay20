import axios from 'axios'
import store from '../store'

export function getInfo(){
	axios.get('https://api.github.com/users/brettpoarch')
		.then(function(response){
			store.dispatch({
			type: 'GET_INFO',
			users: response.data
		})
	});
}
