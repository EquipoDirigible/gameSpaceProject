import React from 'react'
import './App.css'
import { Container  } from 'react-bootstrap'                                                                                    
import ListProducts from '../components/ListProducts'
import SideBar from '../components/SideBar'
import '../components/stylesheets/sidebar.css'


const App = () => {
  return (
    <>
    <div className="container-background"> 
      <NewNavbar/>
      <SideBar/>
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
      <Footer/>
    </div>
    
    </>
  )
}
export default App;
