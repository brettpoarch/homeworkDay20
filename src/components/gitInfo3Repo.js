import React from 'react'
import {getInfo} from '../api/gitInfo3'
import {connect} from 'react-redux'

const repoInfo = React.createClass({
	componentWillMount() {
		getInfo()
	},
	render(){
		//console.log(this.props)
		return(
			<div className='linkContainer'>
				<div className='mainTop'>
					<div>Overview</div>
					<div>Repositories {this.props.reposNumber}</div>
					<div>Stars {this.props.stars}</div>
					<div>Followers {this.props.followers}</div>
					<div>Following {this.props.following}</div>
				</div>
				<div className='mainSearch'>
					<input className='mainInput' type='text' placeholder='Search repositories...'></input>
					<div className='mainButton'>
						<button>Type: All</button>
						<button>Language: All</button>
						<button className='buttonNew'>New</button>
					</div>
				</div>
				<ul>
					{this.props.info.map(function(value){
						return <li key={value.id}>
									 	<div className='mainLinks'>
											<a href={value.html_url}>{value.name}</a>
											<div className='mainLang'>{value.language}</div>
										</div>
									 </li>
					})}
				</ul>
			</div>
		)
	}
})

function mapStateToProps(state){
	console.log(state.userReducer)
	return {...state.userReducer}
}

export default connect(mapStateToProps)(repoInfo)