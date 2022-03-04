import React, { Fragment, useState } from 'react'
import Bcompnt from './Bcompnt'
import View from './View'
import Edit from './Edit'

const App = () => {
  const userData = [
    { id: 1, name: 'Tania', username: 'floppydisokkette' },
    { id: 2, name: 'warm', username: 'floppy' },
    { id: 3, name: 'sones', username: 'disokkette' },

  ];
  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = React.useState(userData)
  const [currentUser, setCurrentUser] = React.useState(initialFormState)
  const [editing, setEditing] = useState(false);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }
  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))

  }
  return (
    <>
      <div className='"Container'>
        <h1>Crud React app</h1></div>
      <div className='flex-row' style={{ display: 'flex', justifyContent: 'space-between', }}>
        <div className='flex-large'>
          {editing ? (
            <Fragment>

              <h2>Edituser</h2>
              <Edit
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                className="bg-success" />
            </Fragment>

          ) : (
            <Fragment>
              <h2>
                <View adduser={addUser} /></h2>

            </Fragment>
          )

          }
        </div>
        <div className='flex-large'>
          <h2>view users</h2>
          <Bcompnt users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>


    </>
  )
}

export default App