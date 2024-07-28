import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoloader } from './components/Github/Github.jsx'
// Ist method of routing
// const router = createBrowserRouter([
//   {
//     // '/' hamara top level element or uske andar routing ya nesting ho rahi h 
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// 2nd method of routing [more preferable]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* parameter hamare yaha pr userid h to autoatically hame uska access milta h apne cmponent k andar jo hmne  */}
      <Route path='user/:userid' element={<User/>}/>  {/** here we learn somethong new. I learn about us e params hook */}

      {/* yaha pr hm loader k andar fetch wala functio daal te hai */}
      <Route loader={githubInfoloader}path='github' element={<Github/>}/>  {/** here we learn somethong new */} 


      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* yaha pr hm router bnaa rhe or ye createBrowsweRouter se aaya h */}
   <RouterProvider router={router}/>  
  </React.StrictMode>,
)
