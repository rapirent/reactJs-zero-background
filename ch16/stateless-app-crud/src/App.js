import React from 'react'
import TextInput from './component/TextInput'
import TextShow from './component/TextShow'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleTextInputChange = () => {
    if(this.inputElement.value.trim())
      this.setState({text: this.inputElement.value})
  }

  handleButtonClick = () => {
    this.inputElement.value = ''
  }

  render() {
    return (
      <div>
        <TextInput
          initText="開始輸入文字"
          onChange={this.handleTextInputChange}
          inputRef={el => this.inputElement = el}
        />
        <TextShow text={this.state.text}/>
        <button onClick={this.handleButtonClick}>清除文字</button>
      </div>
    )
  }
}

export default App
