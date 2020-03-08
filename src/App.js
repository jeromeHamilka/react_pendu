import React, { Component } from 'react'
import "./styles.css"
import AfficheButton from './components/AfficheButton'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
}


  render() {
    return (
      <div>
          <h1>Jeu du pendu</h1>
          <AfficheButton /> 
      </div>
    )
}
}

export default App