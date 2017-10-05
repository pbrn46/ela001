import React from 'react'

// https://reactjs.org/docs/react-component.html

class SubApp extends React.Component {
  render() {
    var test1 = "HELLO"
    return (
      <div>
        {test1}{' '}
        Bolded:
        <b>{this.props.children}</b>
      </div>
    )
  }
}

export default SubApp
