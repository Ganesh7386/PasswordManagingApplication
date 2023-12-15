import {useState} from 'react'

import EachCredential from '../EachCredentials/index'

function DisplayingAllCreds({allCredsList, deleteCredential}) {
  const [isChecked, changeChecked] = useState(false)
  const handleCheckEvent = () => {
    changeChecked(!isChecked)
  }

  return (
    <div>
      <label htmlFor="checkboxForShowing">Show Password</label>
      <input
        id="checkboxForShowing"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckEvent}
      />
      <ul style={{listStyleType: 'none'}}>
        {allCredsList.map(eachCred => (
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
