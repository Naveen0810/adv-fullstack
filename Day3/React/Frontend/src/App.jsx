import { StrictMode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import CB from './classBasedComponent.jsx'
import Nav from './nav.jsx'
import './styles/nav.css'
import ParentComponent from './ParentComponent.jsx'
import Register from './Register.jsx'
import './styles/register.css'
const App = ()=> {
  return(
      <div>
        
        <Nav/>
        <Register/>
        {/* <ParentComponent/>  
        <CB/>      */}
      </div>
  )

}
export default App
