import React, { Fragment } from 'react'

const Bcompnt = (props) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map((user, index) => (
                           <tr key={index}>
                                <td>{user.name}</td>&nbsp;
                                <td>{user.username}</td>
                                <td> {user.id}
                                    <button onClick={() => {
                                        props.editRow(user)
                                    }} className="btn btn-primary">Edit</button>
                                    <button onClick={() => props.deleteUser(user.id)} className="btn btn-warning">Delete</button>
                                </td>
                            </tr>
                        ))
                        
                    ) :
                        (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )}
                </tbody>
            </table>

        </>
    )
}

export default Bcompnt