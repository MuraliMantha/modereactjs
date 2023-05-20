// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: false}

  onclickBtn = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  renderAuthButton = () => {
    const {lightMode} = this.state

    if (lightMode === true) {
      return (
        <button type="button" className="button" onClick={this.onclickBtn}>
          Dark Mode
        </button>
      )
    }
    return (
      <button type="button" className="button" onClick={this.onclickBtn}>
        Light Mode
      </button>
    )
  }

  render() {
    const {lightMode} = this.state
    const modeClass = lightMode ? 'light-mode' : 'dark-mode'
    return (
      <div className="bg-container">
        <div className={`container ${modeClass}`}>
          <h1 className="heading">Click to Change Mode</h1>
          {this.renderAuthButton()}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
