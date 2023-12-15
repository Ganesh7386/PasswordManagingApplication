import {Component} from 'react'

class FormHandlingAddition extends Component {
  state = {
    website: '',
    username: '',
    password: '',
  }

  controlWebsiteNameIntake = event => {
    this.setState({website: event.target.value})
  }

  controlUsernameIntake = event => {
    this.setState({username: event.target.value})
  }

  controlPasswordIntake = event => {
    this.setState({password: event.target.value})
  }

  addingACredentials = () => {
    const {addACred} = this.props
    const {website, username, password} = this.state
    const takenObj = {
      website,
      username,
      password,
    }
    addACred(takenObj)

    this.setState({website: '', username: '', password: ''})
  }

  render() {
    const {website, username, password} = this.state
    return (
      <div>
        <label htmlFor="websiteIntake">Wesbite</label>
        <br />
        <input
          value={website}
          onChange={this.controlWebsiteNameIntake}
          type="text"
          id="websiteIntake"
        />
        <br />
        <label onChange={this.controlUsernameIntake} htmlFor="usernameIntake">
          Username
        </label>
        <br />
        <input
          onChange={this.controlUsernameIntake}
          value={username}
          id="usernameIntake"
          type="text"
        />
        <br />
        <label htmlFor="passwordIntake">Password</label>
        <br />
        <input
          onChange={this.controlPasswordIntake}
          value={password}
          type="text"
          id="passwordIntake"
        />
        <br />

        <button type="button" onClick={this.addingACredentials}>
          Add
        </button>
      </div>
    )
  }
}

export default FormHandlingAddition
