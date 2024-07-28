import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {
  return (
  // yaha pr h m context  k andar apne item ko wrap kr rahe h 


    <UserContextProvider>
      <h1>React with me</h1> 
      <Login/>
      <Profile/>
    </UserContextProvider>


  )
}

export default App
