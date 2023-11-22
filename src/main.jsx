import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './NavBar.jsx'
import MyBody from './Body.jsx'
import About from './About.jsx'
import MyFooter from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <MyBody/>
    <About/>
    <MyFooter/>
    {/* <App/> */}
  </React.StrictMode>,
)
