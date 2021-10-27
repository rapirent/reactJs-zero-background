import React from 'react'
import TodoEditInput from './TodoEditInput'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      inputValue: '',
      editedValue: '',
    }
  }
  handleTodoItemDelete = (id) => {
    const newItems = this.state.items.filter((value, index) => (
      index !== id
    ))
    this.setState({items:newItems})
  }
  handleTodoInputKeyPress = () => {
    const newItem = {text: this.state.inputValue, isEdited: false}
    //這樣就不需要兩個setState，讀取inputValue又同時設定inputValue
    this.setState({items: [newItem, ...this.state.items], inputValue: ''})
  }
  handleTodoInputChange = (text) => {
    this.setState({inputValue: text})
  }
  handleTodoItemEdit = (id) => {
    const newItems = [...this.state.items]
    newItems[id].isEdited = true
    this.setState({items: newItems, editedValue: newItems[id].text})
  }
  handleTodoEditInputKeyPress = (id) => {
    const newItems = [...this.state.items]
    newItems[id].isEdited = false
    newItems[id].text = this.state.editedValue
    this.setState({items: newItems, editedValue: ''})
  }
  handleTodoEditedInputChange = (text) => {
    this.setState({editedValue:text})
  }
  render() {
    return (
      <div>
        <TodoInput
          initText="輸入文字"
          onKeyPress={this.handleTodoInputKeyPress}
          onChange={this.handleTodoInputChange}
          value={this.state.inputValue}
        />
        <ul>
          {this.state.items.map((item, index) => {
            return (
            (item.isEdited) ?
            <TodoEditInput
              key={index}
              value={this.state.editedValue}
              onChange={this.handleTodoEditedInputChange}
              onKeyPress = {
                () => {this.handleTodoEditInputKeyPress(index)}
              }
            /> :
            <TodoItem
              key={index}
              text={item.text}
              deleteMethod={
                () => {this.handleTodoItemDelete(index)}
              }
              editMethod={
                () => {this.handleTodoItemEdit(index)}
              }
            />
          )})}
        </ul>
      </div>
    );
  }
}

export default App;
