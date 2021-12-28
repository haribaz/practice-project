import React, { useState } from 'react'

import AddUser from './components/User/AddUser'
import UserList from './components/User/UserList'

function App() {
    const [users, setUsers] = useState([])

    const addUser = (user) => {
        user = { ...user, id: Math.random().toString() }
        setUsers((prev) => {
            return [...prev, user]
        })
    }

    return (
        <div>
            <AddUser onAddUser={addUser} />
            <UserList users={users} />
        </div>
    )
}

export default App
