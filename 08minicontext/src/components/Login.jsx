import React ,{useState,useContext}from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');


    const {setUser}=useContext(UserContext);  //yahs se hame setuser ka access ml raha h jo ki hmara Usercontext m h 

    const handleSubmit=(e)=>{
        // prevntdefault becoz by default jb bhi hm kuch submit krte h to url kahi na kahi chla jaata h     
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
       value={username}
       onChange={(e)=>{setUsername(e.target.value)}} 
       placeholder='username' 
       />
       {"      "}

      <input type="text" 
      value={password} 
      onChange={(e)=>{setPassword(e.target.value)}} 
      placeholder='password' />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
