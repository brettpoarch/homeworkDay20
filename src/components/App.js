import React from 'react';
import Info from './gitInfo3'
import RepoInfo from './gitInfo3Repo'
import Header from './header'
import {Provider} from 'react-redux'
import store from '../store'

export default React.createClass({
  render() {
    return (
    	<Provider store={store}>
        <div>
  	      <Header />
  	      <Info />
          <RepoInfo />
      	</div>
    	</Provider>
    )
  }
})