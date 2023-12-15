import {Component} from 'react'
import './index.css'

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
      <div className="formAddingCredentialsContainer">
        <div className="formTakingInputContainer">
          <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>
            Add New Password
          </h1>
          <div className="eachInputContainer">
            <div
              style={{
                height: '30px',
                width: '30px',
                padding: '6px',
                display: 'inline-block',
                backgroundColor: 'white',
              }}
            >
              <img
                style={{height: '25px', width: '25px'}}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
            </div>
            <input
              style={{height: '30px', padding: '6px'}}
              value={website}
              onChange={this.controlWebsiteNameIntake}
              type="text"
              id="websiteIntake"
              placeholder="Enter Website"
            />
          </div>
          <br />
          <div className="eachInputContainer">
            <div
              style={{
                height: '30px',
                width: '30px',
                padding: '6px',
                display: 'inline-block',
                backgroundColor: 'white',
              }}
            >
              <img
                style={{
                  height: '25px',
                  width: '25px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
            </div>
            <input
              onChange={this.controlUsernameIntake}
              value={username}
              id="usernameIntake"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <br />
          <div className="eachInputContainer">
            <div
              style={{
                height: '30px',
                width: '30px',
                padding: '6px',
                display: 'inline-block',
                backgroundColor: 'white',
              }}
            >
              <img
                style={{height: '25px', width: '25px', margin: 'auto'}}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
            </div>
            <input
              style={{width: '90%', height: '30px'}}
              onChange={this.controlPasswordIntake}
              value={password}
              type="text"
              id="passwordIntake"
              placeholder="Enter Password"
            />
          </div>
          <br />

          <button
            style={{
              height: '30px',
              width: '60px',
              alignSelf: 'flex-end',
              backgroundColor: '#0b69ff',
              color: 'white',
              border: 'none',
            }}
            type="button"
            onClick={this.addingACredentials}
          >
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default FormHandlingAddition
