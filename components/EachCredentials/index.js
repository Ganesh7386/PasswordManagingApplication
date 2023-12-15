function EachCredential({eachCred, isChecked, deleteCredential}) {
  const {id, username, website, password} = eachCred
  const imageUrl =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

  const handlingDeletingACredential = () => {
    deleteCredential(id)
  }

  return (
    <li>
      <div style={{backgroundColor: 'pink', padding: '10px', margin: '10px'}}>
        <p>id : {id}</p>
        <p>website : {website}</p>
        <p>username : {username}</p>
        <p>
          password :{' '}
          {isChecked ? (
            password
          ) : (
            <img src={imageUrl} alt="stars" style={{height: '5px'}} />
          )}
        </p>
        <button
          type="button"
          onClick={handlingDeletingACredential}
          style={{height: '30px', width: '40px', backgroundColor: 'black'}}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            style={{height: '15px', width: '15px'}}
          />
        </button>
      </div>
    </li>
  )
}

export default EachCredential
