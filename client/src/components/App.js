import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth
    };
  }

  
  render(){
    if(! _.isEmpty(this.props)) {

      return (
        <div>
          <Header />
        </div>
      );
    }
    else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
