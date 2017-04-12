import React from 'react'
import store from '../store'
import {getInfo} from '../api/gitInfo'


export default React.createClass({
	getInitialState(){
		return{
			info: []
		}
	},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()

			this.setState({
				info: appState.infoReducer.info
			})
		})
		getInfo()
	},
	componentWillUnmount(){
		this.unsubscribe()
	},
	render(){
		return(
			<div>
				<ul>
					{this.state.info.map(user=>(
						<li key={'id' + user.id}>Hello {user.login} </li>
					))}	
				</ul>
			</div>
		)
	}
})