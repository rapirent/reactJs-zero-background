import React from 'react'
import './App.css'
// const styles = {
//   textAlign: 'center'
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
  }

  handleAddButtonClick = () => {
    this.setState({ total: this.state.total + 1 })
  }

  handleSubButtonClick = () => {
    this.setState({ total: this.state.total - 1 })
  }

  render() {
    return (
      <div className="App-layout">
        <h1>{this.state.total}</h1>
        <button onClick={this.handleAddButtonClick}>+</button>
        <button onClick={this.handleSubButtonClick}>-</button>
      </div>
    )
  }
}

export default App
