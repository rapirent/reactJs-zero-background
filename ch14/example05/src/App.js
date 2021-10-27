import { render } from '@testing-library/react'
import React from 'react'

class App extends React.Component {
  handleButtonClick() {
    alert('Thank you')
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleButtonClick }>Say Hellon</button>
      </div>
    )
  }
}

export default App
