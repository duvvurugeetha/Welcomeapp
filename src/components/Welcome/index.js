// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttons: 'Subscribe'}
  click = () => {
    this.setState(previous => {
      if (previous.buttons === 'Subscribe') {
        return {buttons: 'Subscribed'}
      }
      return {buttons: 'Subscribe'}
    })
  }

  render() {
    const {buttons} = this.state

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <button onClick={this.click}>{buttons}</button>
      </div>
    )
  }
}
export default Welcome
