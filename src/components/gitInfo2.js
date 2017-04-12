import React from 'react'
import store from '../store'
import {getUsers} from '../api/gitInfo2'

var styles = {
	img:{
		height: '50px'
	}
}
export default React.createClass({
	getInitialState(){
		return{
			user: {
				login: '',
				name: '',
				avatar: ''
			}
		}
	},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			//console.log(appState, 'appState')
			this.setState({
				user: appState.userReducer.user
			})
		})
		getUsers()
	},
	componentWillUnmount(){
		this.unsubscribe()
	},

	render(){
		//console.log(this.state.user, 'user')
		return(
			<div>
				<ul>
					<h1>Hello World</h1>
					{this.state.user.login} {this.state.user.name}
					<div>
						<img style={styles.img} src={this.state.user.avatar_url} alt='avatar'></img>
					</div>
				</ul>
			</div>
		)
	}
})
