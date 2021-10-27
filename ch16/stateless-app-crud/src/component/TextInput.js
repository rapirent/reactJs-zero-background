import React from 'react'
import TextShow from './TextShow'

const TextInput = props => {
  let titleField = null // attach the stateless component
  return (
    <div>
      <input
        type="text"
        placeholder={props.initText}
        ref={props.inputRef}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextInput
