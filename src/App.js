import React, { Component } from 'react';
import SubApp from './SubApp.js'
import SubApp2 from './SubApp2.js'
import SubApp3 from './SubApp3'
import * as Whatever from './SubApp3'

Whatever.Hello2()

class App extends Component {

  render() {
    var line = (<span>This is text <br /></span>)
    return (
      <div className="App">
        <SubApp />
        <SubApp2 test2="this <b>is</b> here" />
        <SubApp>Something <SubApp3 /> else.</SubApp>
        <SubApp>Something other.</SubApp>
        <SubApp2>
          This is <u>SubApp2</u>
        </SubApp2>
      </div>
    )
  }
}

export default App
