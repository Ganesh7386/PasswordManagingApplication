import {useState} from 'react'
import './index.css'

import EachCredential from '../EachCredentials/index'

function DisplayingAllCreds({
  deleteCredential,
  count,
  searchCredential,
  filteredList,
}) {
  const [isChecked, changeChecked] = useState(false)
  const [searchValue, changeSearchValue] = useState('')

  const handleCheckEvent = () => {
    changeChecked(!isChecked)
  }

  const handleSearchingMethod = event => {
    changeSearchValue(event.target.value)
    searchCredential(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="displayingAllCredsContainer">
      <div
        className="topPartContainer"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        <div className="passwordCountContainer">
          <p style={{color: 'white'}}>
            Your Passwords <span>{count}</span>
          </p>
        </div>
        <div className="searchPartContainer">
          <div
            style={{
              height: '30px',
              width: '20px',
              padding: '4px',
              backgroundColor: 'white',
            }}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              style={{height: '10px', width: '10px', marginBottom: '20%'}}
            />
          </div>
          <input
            type="search"
            value={searchValue}
            onChange={handleSearchingMethod}
            style={{height: '30px'}}
          />
        </div>
      </div>
      <div className="showingPasswordContainer">
        <label htmlFor="checkboxForShowing">Show Passwords</label>
        <input
          id="checkboxForShowing"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckEvent}
        />
      </div>
      <ul style={{listStyleType: 'none'}}>
        {filteredList.map(eachCred => (
          <EachCredential
            deleteCredential={deleteCredential}
            isChecked={isChecked}
            eachCred={eachCred}
            key={eachCred.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default DisplayingAllCreds
