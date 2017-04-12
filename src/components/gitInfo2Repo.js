import React from 'react'
import store from '../store'
import {getInfo} from '../api/gitInfo2'

export default React.createClass({
	getInitialState(){
		return{
			info: []
		}
	},
	componentWillMount(){
		this.unsubscribe = store.subscribe(()=>{
			const appState = store.getState()
			//console.log(appState, 'appState')
			this.setState({
				info: appState.userReducer.info
			})
		})
		getInfo()
	},
	componentWillUnmount(){
		this.unsubscribe()
	},

	render(){
		//console.log(this.state.info, 'user')
		return(
			<div>
				<ul>
					<h1>Hello World</h1>
					<div>
						{this.state.info.map(function(value){
							return<p>{value.name}</p>
						})}
					</div>
				</ul>
			</div>
		)
	}
})
