import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';


const App = () => {
  const usersData = [
    { id: 1, name: 'Adeola', username: 'floppydisk'},
    { id: 2, name: 'Opeyemi', username: 'avocado' },
    { id: 3, name: 'Timothy', username: 'timtim' },
  ]
  const [users, setUsers] = useState(usersData)
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser  = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id:null, name: '', username: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState)
 
  const editRow = (user) =>{
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username})
  }
  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }
  return (
    <div className='container'>
      <h1>A CRUD App with React Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
         </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
      </div>
  )
}

export default App;
