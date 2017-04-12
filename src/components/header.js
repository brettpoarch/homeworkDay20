import React from 'react'
import {getUsers} from '../api/gitInfo3'
import {connect} from 'react-redux'

var styles ={ 
	headImg:{
		height: '25px'
	}
}

const header = React.createClass({
	componentWillMount() {
		getUsers()
	},
	render (){
		return(
			<div className='headerContainer'>
				<input className='headerInput' type='text' placeholder='Search GitHub'/>
				<div className='headerMid'>
					<div>Pull Request</div>
					<div>Issues</div>
					<div>Gist</div>
				</div>
				<div className='headerRight'>
					<div>+</div>
					<img className='headerImg' style={styles.headImg} src={this.props.avatar} alt='avatar'></img>
				</div>
			</div>
		)
	}
})



function mapStateToProps(state){
	//console.log(state)
	return {avatar: state.userReducer.avatar}
}

export default connect(mapStateToProps)(header)