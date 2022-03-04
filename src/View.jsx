import React from 'react'

const View = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = React.useState(initialFormState)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const Submits = e => {
         e.preventDefault();
        props.adduser(user)
          if (!user.name || !user.username) return
       setUser(initialFormState)
        console.log(user)
    }
    return (
        <>
            <form onSubmit={Submits}>
                <label>Name</label>
                <input className="form-control" type="text" name="name" onChange={handleInputChange} required />
                <label>Username</label>
                <input type="text" className='form-control' name="username" onChange={handleInputChange} required />
                <button type = "submit" className='btn btn-primary'>Add New user </button>
            </form>

        </>
    )
}

export default View