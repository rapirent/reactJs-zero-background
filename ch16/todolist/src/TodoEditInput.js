const TodoEditInput = props => {
  return (
    <div>
      <input
        type="text"
        autoFocus
        onBlur={
          e => {props.onKeyPress()}
        }
        onKeyPress={
          e => {
            if(e.target.value && e.key === "Enter") {
              props.onKeyPress()
            }
          }
        }
        onChange={
          e => {
            props.onChange(e.target.value)
          }
        }
        value={props.value}
      />
    </div>
  )
}

export default TodoEditInput
