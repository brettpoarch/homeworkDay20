import React from 'react'
import {getUsers} from '../api/gitInfo3'
import {connect} from 'react-redux'

var styles={
	img:{
		height: '200px'
	}
}


const User = React.createClass({
	componentWillMount() {
		getUsers()
	},
	render(){
		//console.log(this.props)
		return(
			<div className='leftContainer'>
				<div>
					<img style={styles.img} src={this.props.avatar} alt='avatar'></img>
				</div>
				<div className='loginInfo'>
					<div className='name'>{this.props.name}</div>
					<div className='login'>{this.props.login}</div> 
					<div className='bio'>Add a bio</div>
				</div>
				<div className='location'>{this.props.location} </div>
			</div>
		)
	}
})

function mapStateToProps(state){
	//console.log(state)
	return {login: state.userReducer.login, name: state.userReducer.name, location: state.userReducer.location, avatar: state.userReducer.avatar}
}

export default connect(mapStateToProps)(User)