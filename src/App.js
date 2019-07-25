import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as myActions from './store/MyActions';

class App extends Component {

  componentDidMount() {
    this.props.myActions.loadUsers();
  }

  render() {
    let { users } = this.props;
    return (
      <div>
        {users && users.map((user, index) => {
          return (
            <div key={user.id}>{user.name}<span style={{ color: 'red' }}>{user.email}</span></div>
          )
        })}
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myActions: bindActionCreators(myActions, dispatch)
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
