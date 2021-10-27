import React from 'react'
import TextInput from './component/TextInput'

class App extends React.Component {
  render() {
    //設定 TextInput.props.initText
    return (
      <div>
        <TextInput initText="開始輸入文字"/>
      </div>
    )
  }
}

export default App
