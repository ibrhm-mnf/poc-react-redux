import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onSubsctract}>substract</button>
        count is {this.props.count}
        <button onClick={this.props.onAdd}>add</button>
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubsctract: () => dispatch({ type: "SUBSTRACT" }),
    onAdd:() => dispatch({ type: "ADD" })
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
