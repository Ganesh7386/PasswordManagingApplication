import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import FormHandlingAddition from '../formHandlingAddition/index'
import DisplayingAllCreds from '../displayingAllCredentials/index'

class CompleteApplication extends Component {
  state = {
    allCredList: [],
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
    }))
  }

  deleteCredential = id => {
    const {allCredList} = this.state
    const filteredListOfCredentials = allCredList.filter(
      eachCred => eachCred.id !== id,
    )

    this.setState({allCredList: filteredListOfCredentials})
  }

  render() {
    const {allCredList} = this.state
    return (
      <div>
        <FormHandlingAddition addACred={this.addACredential} />
        <div>
          <h1>Showing all Credentials</h1>
          <ul>
            <DisplayingAllCreds
              deleteCredential={this.deleteCredential}
              allCredsList={allCredList}
            />
          </ul>
        </div>
      </div>
    )
  }
}

export default CompleteApplication
