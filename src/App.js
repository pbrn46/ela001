import React, { Component } from 'react';
import SubApp from './SubApp.js'
import SubApp2 from './SubApp2.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SubApp />
        <SubApp2 test2="this <b>is</b> here" />
        <SubApp>Something else.</SubApp>
        <SubApp>Something other.</SubApp>
        <SubApp2>
          This is <u>SubApp2</u>
        </SubApp2>
      </div>
    )
  }
}

export default App
