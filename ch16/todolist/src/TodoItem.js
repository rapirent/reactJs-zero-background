const TodoItem = props => (
  <li>
    {props.text}
    <button onClick={props.deleteMethod}>刪除</button>
    <button onClick={props.editMethod}>編輯</button>
  </li>
)

export default TodoItem;
