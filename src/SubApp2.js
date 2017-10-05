import React from 'react'

// https://reactjs.org/docs/components-and-props.html

function SubApp2(props) {
  var test1 = "HELLO"
  return (
    <div>
      {test1}{' '}
      Bolded:
      <b>{props.children}</b>
      {' '}Italic:
      <i>{props.test2}</i>
    </div>
  )
}

export default SubApp2
