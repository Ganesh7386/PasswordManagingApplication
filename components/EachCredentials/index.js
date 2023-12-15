function EachCredential({eachCred, isChecked, deleteCredential}) {
  const {id, username, website, password} = eachCred

  const handlingDeletingACredential = () => {
    deleteCredential(id)
  }

  return (
    <li>
      <div style={{backgroundColor: 'pink', padding: '10px', margin: '10px'}}>
        <p>id : {id}</p>
        <p>website : {website}</p>
        <p>username : {username}</p>
        <p>password : {isChecked ? password : '********'}</p>
        <button type="button" onClick={handlingDeletingACredential}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default EachCredential
