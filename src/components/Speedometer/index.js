// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="img"
        />
        <p className="main">Speed is {speed}mph</p>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="row">
          <button className="btn" onClick={this.accelerate} type="button">
            Accelerate
          </button>
          <button
            className="btn transparent"
            onClick={this.applyBrake}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
