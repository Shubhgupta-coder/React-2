import React ,{useContext}  from 'react'
import UserContext from '../context/UserContext'

// yaha pr hme data lena h to isliye hm usecontext se user lenge 
function Profile() {
    const {user}=useContext(UserContext)
    
    if(!user){
        return <div>please login</div>
    }
    else{
        return <div>Welcome {user.username}</div>
    }
}

export default Profile
