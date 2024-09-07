import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isMode: true,
  }

  onCLickMode = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  render() {
    const {isMode} = this.state

    const buttonText = isMode ? 'Light' : 'Dark'

    const cardClassName = isMode ? 'dark' : 'light'

    return (
      <div className="light-dark-container">
        <div className={`card-container ${cardClassName}`}>
          <h1 className="heading"> Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onCLickMode}>
            {buttonText} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
