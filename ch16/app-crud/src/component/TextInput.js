import React from 'react'
import TextShow from './TextShow'

const TextInput = props => {
  //  props.xxx can be a callback hooked to parent component,
  //  when JSX DOM event tag trigger, it will call the callback function
  //  it's common for using props.onChnage and having onChange = {} tag in parent component JSX


  // but the onChange JSX DOM tag for children component should not change,
  // because onChange is actually a real browser event listener/trigger
  // we can synthesis a fake event and listener/trigger for parent but not children
  return (
    <div>
      <input
        type="text"
        placeholder={props.initText}
        onChange={
          e => {
            props.myChange(e.target.value)
          }
        }
        value={props.value}
      />
    </div>
  )
}

export default TextInput
