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
  const renderNoPasswordsUI = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        style={{height: '80px', width: '80px'}}
      />
      <p>No Passwords</p>
    </div>
  )

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
          <h1 style={{color: 'white'}}>Your Passwords</h1>
          <p>{count}</p>
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
            value={searchValue}
            type="search"
            onChange={handleSearchingMethod}
            style={{height: '30px'}}
          />
        </div>
      </div>
      <div className="showingPasswordContainer">
        <input
          id="checkboxForShowing"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckEvent}
        />
        <label htmlFor="checkboxForShowing">Show passwords</label>
      </div>
      <>
        {count === 0 ? (
          renderNoPasswordsUI()
        ) : (
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
        )}
      </>
    </div>
  )
}

export default DisplayingAllCreds
