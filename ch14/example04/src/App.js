import { render } from '@testing-library/react'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => { alert('thank you') }}>Say Hellon</button>
      </div>
    )
  }
}

export default App
