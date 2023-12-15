import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import FormHandlingAddition from '../formHandlingAddition/index'
import DisplayingAllCreds from '../displayingAllCredentials/index'
import './index.css'

class CompleteApplication extends Component {
  state = {
    allCredList: [],
    filteredList: [],
  }

  addACredential = givenDetailsObj => {
    const {website, username, password} = givenDetailsObj

    const detailsObj = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      allCredList: [...prevState.allCredList, detailsObj],
      filteredList: [...prevState.filteredList, detailsObj],
    }))
  }

  deleteCredential = id => {
    const {allCredList} = this.state
    const filteredListOfCredentials = allCredList.filter(
      eachCred => eachCred.id !== id,
    )

    this.setState({
      allCredList: filteredListOfCredentials,
      filteredList: filteredListOfCredentials,
    })
  }

  searchCredential = text => {
    const {allCredList} = this.state
    this.setState({filteredList: allCredList})
    const filteredBasedOnSearch = allCredList.filter(eachCred =>
      eachCred.username.toLowerCase().includes(text),
    )
    this.setState({filteredList: filteredBasedOnSearch})
  }

  renderNoPasswordsUI = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        style={{height: '80px', width: '80px'}}
      />
      <p>No Passwords</p>
    </div>
  )

  render() {
    const {allCredList, filteredList} = this.state
    const count = allCredList.length
    return (
      <div className="over-all-application-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          style={{height: '50px', width: '130px'}}
        />
        <FormHandlingAddition addACred={this.addACredential} />
        <div>
          <h1>Showing all Credentials</h1>
          <DisplayingAllCreds
            searchCredential={this.searchCredential}
            count={count}
            deleteCredential={this.deleteCredential}
            allCredsList={allCredList}
            filteredList={filteredList}
          />
        </div>
      </div>
    )
  }
}

export default CompleteApplication
