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

  handleTextInputChange = (text) => {
    this.setState({text: text})
  }

  render() {
    return (
      <div>
        <TextInput
          initText="開始輸入文字"
          myChange={this.handleTextInputChange}
          value={this.state.text}
        />
        <TextShow text={this.state.text}/>
      </div>
    )
  }
}

export default App
