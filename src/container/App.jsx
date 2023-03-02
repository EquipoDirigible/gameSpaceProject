import React from 'react'
import './App.css'
import Footer from '../components/Footer'
import { Container  } from 'react-bootstrap'                                                                                    
import '../components/stylesheets/reset.css'
                                                                                  
import ListProducts from '../components/ListProducts'
import NewNavbar from '../components/NewNavBar'
import '../container/App.css'


const App = () => {
  return (
    <>
    <div className="container-background"> 
      <NewNavbar/>
      <h1 className="text-center"> List of products  </h1>
      <ListProducts/>
      <Footer/>
    </div>
    
    </>
  )
}
export default App;
